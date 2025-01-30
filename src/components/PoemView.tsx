import {PoemType} from "../types/PoemType.ts";
import { format } from "date-fns";
import {useState} from "react";
import {Firestore} from "@firebase/firestore";
import {useFirebase} from "../contexts/FirebaseContext.tsx";
import {doc, updateDoc, increment} from "firebase/firestore";

interface Props{
    poem: PoemType,
    share?: boolean
}

function PoemView(props: Props) {
    const {id,poem,name,lastName,timestamp,shareCount} = props.poem;
    const [copied, setCopied] = useState(false);

    const db: Firestore = useFirebase();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handleShare = async (e) => {
        e.preventDefault();
        if (!copied) {
            try {
                await navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/vers/${id}`);
                setCopied(true);

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const ref = doc(db, "Poems", id);
                await updateDoc(ref, {
                    shareCount: increment(1)
                })

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) { /* empty */ }
        }

    }

    return (
        <article className="poem">
            <p className='text-sm mb-2'><span className='font-bold text-[#fff]'>
                { lastName && name ? name + " " + lastName : 'Anonym'}</span><span className='text-meta-data'> • <time className='text-meta-data' dateTime={timestamp.toDate().toISOString()}>{format(timestamp.toDate(), "dd.MM.yyyy")}</time></span>
                { props.share ? (
                    <a href="#" className={copied ? 'share-button-shared' : 'share-button'} onClick={handleShare}>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 98.86"><g><path fill="#d7d7d7" className="st0" d="M122.88,49.43L73.95,98.86V74.23C43.01,67.82,18.56,74.89,0,98.42c3.22-48.4,36.29-71.76,73.95-73.31l0-25.11 L122.88,49.43L122.88,49.43z"/></g></svg>
                    </a>
                ) : ""}
            </p>
            { !props.share ? (
                <p className='text-sm mb-2'>
                    Zdieľania: <span className='font-bold'>{shareCount}</span>
                </p>
            ) : ""}
            <p style={{whiteSpace: "pre-wrap"}} className='text-white'>{poem}</p>
        </article>
    );
}

export default PoemView;
