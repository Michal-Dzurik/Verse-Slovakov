import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: import.meta.env.FIREBASE_PROJECT + ".firebaseapp.com",
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.FIREBASE_PROJECT + ".appspot.com",
    messagingSenderId: import.meta.env.FIREBASE_SENDER_ID,
    appId: import.meta.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export default app;
