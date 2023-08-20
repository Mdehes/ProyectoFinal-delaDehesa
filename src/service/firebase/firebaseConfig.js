//Firebase & Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk76pmwoNtQX5sWcbgqcY0UMZ_oUnoCTU",
  authDomain: "proyectofinal-deladehesa.firebaseapp.com",
  projectId: "proyectofinal-deladehesa",
  storageBucket: "proyectofinal-deladehesa.appspot.com",
  messagingSenderId: "578761652590",
  appId: "1:578761652590:web:31b6f0879af4fc8a37697f",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
