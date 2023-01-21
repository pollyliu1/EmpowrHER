import React from 'react'

function Navbar() {
    return (
        <nav className='bg-gray-100'>
            <div className='max-w-6xl mx-auto'>
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

                    <div className='flex items-center space-x-1'>
                        <a href='#' className='py-2 px-3 bg-violet-300 hover:bg-violet-200 hover:text-gray-800 rounded'>Login</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar