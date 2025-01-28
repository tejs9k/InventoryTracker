// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_MYSUPERSECRETKEY,
  authDomain: "inventorywebapp-af16a.firebaseapp.com",
  projectId: "inventorywebapp-af16a",
  storageBucket: "inventorywebapp-af16a.firebasestorage.app",
  messagingSenderId: "117769793912",
  appId: "1:117769793912:web:025cf0464c53118134988d",
  measurementId: "G-D7G9GYGPZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };