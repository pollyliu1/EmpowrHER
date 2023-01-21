import React from 'react'

import Navbar from './Navbar'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

function Jumbotron({ user }) {
  return (
    <>
        <Navbar />
        {user ? 
        (<>
        {user.displayName}
        <SignOutButton />
        </> ) : 
        <SignInButton /> }
    </>
  )
}

export default Jumbotron