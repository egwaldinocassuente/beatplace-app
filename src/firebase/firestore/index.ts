import { getDoc } from "firebase/firestore";
import { firestore } from "..";

const { doc, setDoc, addDoc, collection, getDocs } = firestore;

const db = firestore.getFirestore();

/**
 *
 * @param collectionName - Name of collection (string)
 * @param document - Identity of document on collection (string)
 * @param data - Data to be stored on document (any)
 */
export function setDocument(
    collectionName: string,
    document: string,
    data: any
) {
    return setDoc(doc(db, collectionName, document), data);
}

/**
 *
 * @param collectionName - Name of collection (string)
 * @param data - Data to be stored on document (any)
 */
export function addDocument(collectionName: string, data: any) {
    return addDoc(collection(db, collectionName), data);
}

/**
 *
 * @param collectionName - Name of collection (string)
 */
export function getAllDocument(collectionName: string) {
    const docRef = getDocs(collection(db, collectionName));
    return docRef;
}

/**
 *
 * @param collectionName - Name of collection (string)
 * @param document - Identity of document on collection (string)
 */
export function getDocument(collectionName: string, document: string) {
    const docRef = doc(db, collectionName, document);
    const docSnap = getDoc(docRef);
    return docSnap;
}