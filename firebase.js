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
  authDomain: "inventory-management-2b388.firebaseapp.com",
  projectId: "inventory-management-2b388",
  storageBucket: "inventory-management-2b388.appspot.com",
  messagingSenderId: "753369594214",
  appId: "1:753369594214:web:bd585538efc186c01170a7",
  measurementId: "G-H8CV8FV5ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };