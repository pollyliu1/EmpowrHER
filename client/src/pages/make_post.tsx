import React from 'react'
import Navbar from '@/components/Navbar'

function make_post() {
  return (
    <div>
        <Navbar />
        <div className="">
        <div className="flex items-center h-screen w-full bg-teal-lighter">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <h1 className="block w-full text-center mb-6 uppercase font-bold text-lg text-grey-darkest">Create Post</h1>
                <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
                {/* <div className="flex flex-col mb-4 md:w-1/2">
                    <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" for="first_name">First Name</label>
                    <input className="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="first_name" id="first_name" />
                </div>
                <div className="flex flex-col mb-4 md:w-1/2">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2" for="last_name">Last Name</label>
                    <input className="border py-2 px-3 text-grey-darkest md:ml-2" type="text" name="last_name" id="last_name" />
                </div> */}
                <div className="flex flex-col mb-4 md:w-full">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="title">Title</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email" />
                </div>
                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="description">Description</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password" />
                </div>
                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="skills-have">Skills Have</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password" />
                </div>
                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="skills-wanted">Skills Wanted</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password" />
                </div>
                <button className="block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
                </form>
            </div>
        </div>
        </div>


    </div>
  )
}

export default make_post