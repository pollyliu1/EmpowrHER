import { url } from 'inspector'
import React from 'react'

import Navbar from './Navbar'
import SignInButton1 from './SignInButton1'
import SignOutButton1 from './SignOutButton1'

function Jumbotron({ user }) {
    return (
        <>
            <Navbar user={user} />

            <div className="bg-[url('../../public/jumbotron-gradient.png')]">
            <div className="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-12">
                <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                    Start studying with us
                </h2>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md bg-blue-500 shadow">
                        { user
                        ? (<> {user.displayName} </>)
                        : <SignInButton1 /> }
                    </div>
                </div>
            </div>
                

                <h1>hi</h1>
            </div>
        </>
    )
}

export default Jumbotron