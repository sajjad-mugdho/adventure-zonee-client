// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQfzPscBthsIltBkQuftksADtnb_7_0xA",
  authDomain: "adventure-zone-assignment.firebaseapp.com",
  projectId: "adventure-zone-assignment",
  storageBucket: "adventure-zone-assignment.appspot.com",
  messagingSenderId: "1087004237040",
  appId: "1:1087004237040:web:850aab7206108ae88db635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;