import {Timestamp} from "firebase/firestore";

export type PoemType = {
    name?: string,
    lastName?: string,
    poem: string,
    timestamp: Timestamp,
    email: string,
    verified: boolean,
}
