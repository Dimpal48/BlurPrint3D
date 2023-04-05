import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxhNl4TDj33ZVf65UyxLFgqa1GTIfhEvQ",
  authDomain: "blueprint3d-ee0a0.firebaseapp.com",
  projectId: "blueprint3d-ee0a0",
  storageBucket: "blueprint3d-ee0a0.appspot.com",
  messagingSenderId: "988167258558",
  appId: "1:988167258558:web:f1500b1edc1a4ae4fbb9ef",
  measurementId: "G-R4DPVW9JGF",
};

//initilize firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore=getFirestore(app);
const storage=getStorage(app);
const auth=getAuth(app);



export {app, firestore , storage,auth };