// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQGkjCzGjculR4tzXf2gf5U7svK_zY0RE",
  database: "https://fitstack-fd9ef.firebaseapp.com",
  authDomain: "fitstack-fd9ef.firebaseapp.com",
  projectId: "fitstack-fd9ef",
  storageBucket: "fitstack-fd9ef.firebasestorage.app",
  messagingSenderId: "398803076728",
  appId: "1:398803076728:web:c06e73275b0c69dd684f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };