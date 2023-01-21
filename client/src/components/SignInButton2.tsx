import React from 'react'

import { googleSignIn } from "../serve/firebase.js";


function SignInButton2() {
    return (
        <>
            <button className='py-1 px-4 bg-violet-300 hover:bg-violet-200 hover:text-gray-800 rounded-full' onClick={googleSignIn}> Sign In </button>
        </>
    )
}

export default SignInButton2