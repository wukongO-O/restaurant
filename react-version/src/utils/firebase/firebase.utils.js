import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    addDoc,
    collection,
    writeBatch,
    query,
    orderBy,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADTRnRubIoHBvMAYc2AIKZj5rpZ-W5bXo",
  authDomain: "busytown-83a25.firebaseapp.com",
  projectId: "busytown-83a25",
  storageBucket: "busytown-83a25.appspot.com",
  messagingSenderId: "646666317490",
  appId: "1:646666317490:web:cc8c36f623528781daa3ab"
};


const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(async (object) => {
        const docRef = doc(collectionRef, object.title);
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done!');
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef, orderBy('title', 'desc'));

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        accumulator[title.toLowerCase()] = items;
        return accumulator;
    }, {});

    return categoryMap;
}