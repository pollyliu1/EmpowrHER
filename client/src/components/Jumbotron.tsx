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
                <div className='max-w-screen-sm bg-indigo-200 shadow-2xl rounded-3xl mx-auto py-10 px-10 mt-40 '>
                    <p>
                        EmpowerHER is a web application designed to connect and empower women by sharing skills and knowledge.
                    </p>
                    <br></br>
                    <p>
                        Our platform allows users to create profiles, <span className='font-bold'>share</span> their skills and expertise,
                        and <span className='font-bold'>connect</span> with other women in their community or industry. Whether you're a seasoned
                        professional or just starting out, our goal is to provide a<span className='font-bold'> safe and inclusive space </span>
                        for women to share their skills and support one another.
                    </p>
                    <br></br>
                    <p>
                        EmpowerHER is the ultimate tool for women looking to grow their skill-sets and hobbies. Join our  
                        <span className='font-bold'> community </span> today and start sharing your skills to empower yourself and others.
                    </p>

                </div>
                </div>
        </>
    )
}

export default Jumbotron