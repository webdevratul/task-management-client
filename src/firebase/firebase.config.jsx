// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxA-KQJbkPes7n4XSvRgU3syC2XIzosok",
    authDomain: "task-management-fe0d0.firebaseapp.com",
    projectId: "task-management-fe0d0",
    storageBucket: "task-management-fe0d0.appspot.com",
    messagingSenderId: "789403526824",
    appId: "1:789403526824:web:5d9da4b314f77048a2449d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;