import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwR8sLHuNY8iKhLcP8xJse-Eh-iiKDuDY",
    authDomain: "todo-app-199be.firebaseapp.com",
    projectId: "todo-app-199be",
    storageBucket: "todo-app-199be.appspot.com",
    messagingSenderId: "337965775088",
    appId: "1:337965775088:web:d3bf4b8f7f676863b0aa35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;