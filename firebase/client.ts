import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpNpslv5BC2up1CeGktqD_ZNa4d830qiw",
  authDomain: "interviewplatform-5cc6c.firebaseapp.com",
  projectId: "interviewplatform-5cc6c",
  storageBucket: "interviewplatform-5cc6c.firebasestorage.app",
  messagingSenderId: "37007778983",
  appId: "1:37007778983:web:bf74e138c5be2923df6782",
  measurementId: "G-FX09RH05F5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);