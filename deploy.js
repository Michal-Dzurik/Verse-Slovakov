import Client from 'ssh2-sftp-client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const sftp = new Client();

async function deploySftp() {
    try {
        await sftp.connect({
            host: process.env.VITE_FTP_HOST,
            port: process.env.VITE_FTP_PORT,
            username: process.env.VITE_FTP_USER,
            password: process.env.VITE_FTP_PASSWORD,
        });

        const remotePath = process.env.VITE_FTP_DESTINATION_FOLDER;
        console.log('Connected to FTP server.');

        // Removing bundled JS since it always has a different name
        const remoteFiles = await sftp.list(remotePath + '/assets');

        const jsFiles = remoteFiles.filter(file => file.name.endsWith('.js'));

        if (jsFiles.length > 0) {
            console.log(`Deleting ${jsFiles.length} .js files in the remote directory...`);

            for (const file of jsFiles) {
                await sftp.delete(path.join(remotePath + '/assets', file.name));
            }
        } else {
            console.log('No .js files to delete.');
        }

        // Upload all files from the dist folder
        const localPath = path.join(__dirname, 'dist');
        console.log(`Uploading files..`);
        await sftp.uploadDir(localPath, remotePath);
        console.log('Upload successful');

    } catch (err) {
        console.error('Error during SFTP upload:', err);
    } finally {
        await sftp.end();
    }
}

deploySftp()
