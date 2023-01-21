import React from 'react'

import Navbar from './Navbar'
import SignInButton1 from './SignInButton1'
import SignOutButton1 from './SignOutButton1'

function Jumbotron({ user }) {
  return (
    <>
        <Navbar user={user} />


        <div className='bg-purple-200'>
        {user ? 
        (<>
        {user.displayName}
        </> ) : 
        <SignInButton1 /> }
        
        <h1>hi</h1>
        </div>
    </>
  )
}

export default Jumbotron