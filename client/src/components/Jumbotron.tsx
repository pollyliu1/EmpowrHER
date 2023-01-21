import React from 'react'

import Navbar from './Navbar'
import SignInButton1 from './SignInButton1'
import SignOutButton1 from './SignOutButton1'

function Jumbotron({ user }) {
  return (
    <>
        <Navbar user={user} />
        {user ? 
        (<>
        {user.displayName}
        </> ) : 
        <SignInButton1 /> }
    </>
  )
}

export default Jumbotron