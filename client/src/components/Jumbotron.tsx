import React from 'react'

import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

function Jumbotron({ user }) {
  return (
    <>
        {user ? 
        (<>
        {user.displayName}
        <SignOutButton />
        </> ) : <SignInButton /> }
    </>
  )
}

export default Jumbotron