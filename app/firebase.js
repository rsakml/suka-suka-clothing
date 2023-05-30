// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAano44Dlo0siO5n9Ne5-ORSNXLrlumO-w",
  authDomain: "sukasukaclothing-43978.firebaseapp.com",
  projectId: "sukasukaclothing-43978",
  storageBucket: "sukasukaclothing-43978.appspot.com",
  messagingSenderId: "867855311164",
  appId: "1:867855311164:web:8d03bd4ebdc7da4e7bfe39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};
