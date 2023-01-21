import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getFirestore, collection, query, orderBy, getDocs } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: process.env["NEXT_PUBLIC_API_KEY"],
    authDomain: process.env["NEXT_PUBLIC_AUTH_DOMAIN"],
    projectId: process.env["NEXT_PUBLIC_PROJECT_ID"],
    storageBucket: process.env["NEXT_PUBLIC_STORAGE_BUCKET"],
    messagingSenderId: process.env["NEXT_PUBLIC_MESSENGING_SENDER_ID"],
    appId: process.env["NEXT_PUBLIC_APP_ID"],
    measurementId: process.env["NEXT_PUBLIC_MEASUREMENT_ID"]
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider); // after sign in, auth variable is automatically changed to signed in
};

const getAllPostsSnapShot = async () => {
    const q = query(collection(db, "posts"), orderBy('created_at', "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
}

export { db, auth, googleSignIn, getAllPostsSnapShot }