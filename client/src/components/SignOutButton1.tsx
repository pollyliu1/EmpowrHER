import React from 'react'

import { signOut } from "firebase/auth";
import { auth } from "../serve/firebase.js";


function SignOutButton1() {
    return (
        <>
            <button className="bg-indigo-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-indigo-600" onClick={() => signOut(auth)}>Sign Out</button>
        </>
    )
}

export default SignOutButton1