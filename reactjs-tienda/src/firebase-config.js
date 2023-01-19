// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgxEbj3wdTf2zUOrwbPze07YlV5oRQO08",
    authDomain: "tienda-informatica-96e80.firebaseapp.com",
    projectId: "tienda-informatica-96e80",
    storageBucket: "tienda-informatica-96e80.appspot.com",
    messagingSenderId: "173143863429",
    appId: "1:173143863429:web:7df2e44d4ee0d9d067b9ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);