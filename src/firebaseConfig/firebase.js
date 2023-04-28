

/* utilizaremos otra base mientras, esta se excedio del limite diario
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPw3eRrfQ1GxP2-AxEap7CxyUKio4zdbA",
  authDomain: "softwareii-5cc9f.firebaseapp.com",
  databaseURL: "https://softwareii-5cc9f-default-rtdb.firebaseio.com",
  projectId: "softwareii-5cc9f",
  storageBucket: "softwareii-5cc9f.appspot.com",
  messagingSenderId: "669859230842",
  appId: "1:669859230842:web:673a67e098c264ab31f7c3",
  measurementId: "G-XCHL4L7892"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe3ZSKK9T5ilJD8MOyEC1pi98Jrl3wQM4",
  authDomain: "ingsoftware2-372cc.firebaseapp.com",
  projectId: "ingsoftware2-372cc",
  storageBucket: "ingsoftware2-372cc.appspot.com",
  messagingSenderId: "974714091612",
  appId: "1:974714091612:web:add97166730a45d71ece99",
  measurementId: "G-H2B9TWDM4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);