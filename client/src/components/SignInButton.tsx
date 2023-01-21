import React from 'react'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../serve/firebase.js";


function SignInButton() {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider); // after sign in, auth variable is automatically changed to signed in
    };

    return (
        <>
            <button className="bg-indigo-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-indigo-600" onClick={googleSignIn}>Empower Me</button>
        </>
    )
}

export default SignInButton