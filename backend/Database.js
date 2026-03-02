import { doc, setDoc, getDoc, getDocs, collection, query, where, addDoc, orderBy, limit } from "firebase/firestore"
import { database } from "./Firebase"


export async function createSearch(userId, queryText, results) {
  const docRef = await addDoc(collection(database, "searches"), {
    userId,
    query: queryText,
    results,
    createdAt: new Date(),
  });
  return docRef.id;
}
