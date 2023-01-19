import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../firebase-config";

export async function getAll() {
    const data = [];
    const all = await getDocs(collection(db, "users"));
    all.forEach((doc) => {
        data.push({ id: doc.id, data: doc.data() });
    });
    return data;
}