import React from 'react';

import { Navigate } from 'react-router-dom';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

export default function SignInPage(props) {
  const currentUser = props.currentUser;

  //the authenticator
  const auth = getAuth();

  const configObj = {
    signInOptions: [
      { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
      { provider: GoogleAuthProvider.PROVIDER_ID }
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false 
    },
    credentialHelper: 'none'
  }

  if (currentUser.userId) { 
    window.alert("Signed in!");
    return <Navigate to="/" />
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
      </div>
    </div>
  )
}