import { DocumentSnapshot, getDoc, DocumentReference } from 'firebase/firestore';

type DataSnapshot<T> = T | null;

export default async function getData<T>(docRef: DocumentReference<T | any>): Promise<DataSnapshot<T>> {
  try {
    const docSnap:DocumentSnapshot<T> = await getDoc(docRef);
    const filteredData = docSnap.data() as T;
    return filteredData ?? null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
