import React from 'react'

import SignInButton2 from './SignInButton2'
import SignOutButton2 from './SignOutButton2'

function Navbar({ user }) {
    return (
        <nav className='bg-gradient-to-r from-violet-200 to-violet-100'>
            <div className='max-w-7xl mx-auto'>
                <div className="flex justify-between">
                    <div className='flex space-x-4'>
                        <div>
                            <a href='#' className='flex item-center py-6 px-3 text-gray-700 hover:text-gray-600'>
                            <svg className='h-6 w-6 mr-2 text-violet-400'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>
                                <span>EmpowrHER</span>
                            </a>
                        </div>
                    </div>

                    <div className='flex items-center space-x-12'>
                        <div><a>Home</a></div>
                        <div><a>About Us</a></div>
                        <div><a>Testimonials</a></div>
                        <div><a>Team</a></div>
                        <div>{user ? <SignOutButton2 /> : <SignInButton2 />}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar