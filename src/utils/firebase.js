import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdwkoVOAdEiNY9fgSp0YdpuO8XG37hCn4",
  authDomain: "primetask-ab3c5.firebaseapp.com",
  projectId: "primetask-ab3c5",
  storageBucket: "primetask-ab3c5.appspot.com",
  messagingSenderId: "648007986678",
  appId: "1:648007986678:web:1e664832b0b6f266beabd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
