// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDjmwj1_HZS0XP_jCa2M_YzbLZZ6mWso7U",
	authDomain: "e-commerce-d2716.firebaseapp.com",
	projectId: "e-commerce-d2716",
	storageBucket: "e-commerce-d2716.appspot.com",
	messagingSenderId: "964124644230",
	appId: "1:964124644230:web:d51cdca4cd5857ce515207",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
