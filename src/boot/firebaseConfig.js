// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNQJAu3IYb0q7hTXp5WGGHPqt05zynvkE",
  authDomain: "og-quasar-portfolio.firebaseapp.com",
  projectId: "og-quasar-portfolio",
  storageBucket: "og-quasar-portfolio.appspot.com",
  messagingSenderId: "109388766672",
  appId: "1:109388766672:web:6485af075fd4c20df52dd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
