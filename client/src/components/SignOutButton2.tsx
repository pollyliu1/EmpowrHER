import React from 'react'

import { signOut } from "firebase/auth";
import { auth } from "../serve/firebase.js";


function SignOutButton2() {
    return (
        <>
            <button className='py-1 px-4 bg-violet-300 hover:bg-violet-200 hover:text-gray-800 rounded-full' onClick={() => signOut(auth)}> Sign Out </button>
        </>
    )
}

export default SignOutButton2