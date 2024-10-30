import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASUylrwlOgpKOF7VZC3e0s_VV0aIuKSP4",
    authDomain: "gymsale-3ceef.firebaseapp.com",
    projectId: "gymsale-3ceef",
    storageBucket: "gymsale-3ceef.appspot.com",
    messagingSenderId: "679651729651",
    appId: "1:679651729651:web:38daa15098eb18a3021786"
};  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);