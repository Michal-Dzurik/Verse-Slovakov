import React, { createContext, useContext } from "react";
import { getFirestore } from "firebase/firestore";
import app from "../FirebaseConfig";
import {Firestore} from "@firebase/firestore";

const FirebaseContext = createContext<Firestore|null>(null);

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
    const db: Firestore = getFirestore(app);

    return (
        <FirebaseContext.Provider value={db}>
            {children}
        </FirebaseContext.Provider>
    );
};

export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
};
