// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertybazzar-b355a.firebaseapp.com",
  projectId: "propertybazzar-b355a",
  storageBucket: "propertybazzar-b355a.firebasestorage.app",
  messagingSenderId: "226415555956",
  appId: "1:226415555956:web:3d6f6a725cb5e5af80a821",
  measurementId: "G-83FQER7EEP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);