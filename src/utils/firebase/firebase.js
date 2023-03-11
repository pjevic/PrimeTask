import { initializeApp } from "firebase/app";
import { signInWithRedirect, signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdwkoVOAdEiNY9fgSp0YdpuO8XG37hCn4",
  authDomain: "primetask-ab3c5.firebaseapp.com",
  projectId: "primetask-ab3c5",
  storageBucket: "primetask-ab3c5.appspot.com",
  messagingSenderId: "648007986678",
  appId: "1:648007986678:web:1e664832b0b6f266beabd7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
