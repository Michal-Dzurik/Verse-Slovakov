import {Timestamp} from "firebase/firestore";

export type PoemType = {
    id?: string,
    name?: string,
    lastName?: string,
    poem: string,
    timestamp: Timestamp,
    email: string,
    verified: boolean,
    shareCount: number,
}
