<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZCb0b6Mzstn6VGzSqQ5W8dCwyFXh09Ts",
  authDomain: "travelify2.firebaseapp.com",
  projectId: "travelify2",
  storageBucket: "travelify2.firebasestorage.app",
  messagingSenderId: "849398485938",
  appId: "1:849398485938:web:7dac87db2f3261aec54aab",
  measurementId: "G-ZKTSPMP8VQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export { app, auth, database, storage, analytics };
=======
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = process.env.NODE_ENV === 'production' ? {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "", 
  measurementId: ""
} : {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
export const analytics = () => getAnalytics(app);

export default app
>>>>>>> 0e76531abd0b228ee570b4d2d2634a89fe2c7dd9
