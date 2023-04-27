
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
export const db = getFirestore(app);