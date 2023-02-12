import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6MZUi3cl5em8YqNKMJ4Rqi6B--s8owO4",
  authDomain: "saylanistore.firebaseapp.com",
  projectId: "saylanistore",
  storageBucket: "saylanistore.appspot.com",
  messagingSenderId: "580021006116",
  appId: "1:580021006116:web:a5ad2410696b66135ecdb1",
  measurementId: "G-HRDBVP9HCG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);