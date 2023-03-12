import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
