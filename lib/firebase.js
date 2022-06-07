import firebase from 'firebase/app';
import 'firebase/auth';

import { initializeApp } from "firebase/app";

// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function getCities(db) {
//         const citiesCol = collection(db, 'cities');
//         const citySnapshot = await getDocs(citiesCol);
//         const cityList = citySnapshot.docs.map(doc => doc.data());
//         return cityList;
//       }

export default firebaseConfig;