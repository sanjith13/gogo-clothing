import React from 'react'
import {sendSignInLinkToEmail} from 'firebase/auth'
import {auth} from '../../components/firebaseConfig'
const Verification = () => {
  return (
    <div>Check Mail for Verification</div>
  )
}
export async function getStaticProps() {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}
export default Verification