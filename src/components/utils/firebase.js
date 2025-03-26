// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkLUZfKrcPL3-MeVL5jCz-6vNBjT8DhOI",
  authDomain: "capstone-project-c01ad.firebaseapp.com",
  projectId: "capstone-project-c01ad",
  storageBucket: "capstone-project-c01ad.firebasestorage.app",
  messagingSenderId: "214677495778",
  appId: "1:214677495778:web:a4f061a41e7c88e29aa3bb",
  measurementId: "G-8ZQS1Y802E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
