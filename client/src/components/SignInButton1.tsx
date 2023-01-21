import React from 'react'

import { googleSignIn, auth } from "../serve/firebase.js";


function SignInButton1() {
    return (
        <>
            <button className="bg-indigo-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-indigo-600" onClick={googleSignIn}>Empower Me</button>
        </>
    )
}

export default SignInButton1