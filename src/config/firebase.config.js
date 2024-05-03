import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  // apiKey: "AIzaSyAEuavBTmI6Ss9kWpXeCKHZT2qFyS5XCmA",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "burger-builder-fullstack-2.firebaseapp.com",
  projectId: "burger-builder-fullstack-2",
  storageBucket: "burger-builder-fullstack-2.appspot.com",
  messagingSenderId: "207480539661",
  appId: "1:207480539661:web:2b207efa97a6d11a522344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
