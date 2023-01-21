import { url } from 'inspector'
import React from 'react'

import Navbar from './Navbar'
import SignInButton1 from './SignInButton1'
import SignOutButton1 from './SignOutButton1'

function Jumbotron({ user }) {
    return (
        <>
            <div className="bg-[url('../../public/jumbotron-gradient.png')] bg-cover h-screen">
                <Navbar user={user} />
                <div className="justify-content h-screen">
                    <div className="max-w-screen-lg bg-white shadow-2xl rounded-3xl mx-auto text-center py-12 mt-20">
                        <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                            <span className="font-extrabold text-grey-800 text-3xl leading-9 tracking-tight sm:text-4xl sm:leading-10">
                            Empowr
                            </span>
                            <span className="font-extrabold text-3xl text-violet-500 leading-9 tracking-tight sm:text-4xl sm:leading-10">
                            HER
                            </span>
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex rounded-md bg-blue-500 shadow rounded-3xl">
                                { user
                                ? (<> {user.displayName} </>)
                                : <SignInButton1 /> }
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Jumbotron