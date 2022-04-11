import React, { useEffect, useState } from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../utilities/firebase.init';

export default function useAuthProviderHandler() {
    let error, loading;
    const [errorMessage, setErrorMessage] = useState()
    const [authProvider,setAuthProvider] = useState()

    const [signInWithGoogle, , , googleSignInError = error] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, , signUpLoading = loading, signUpError = error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatingError = error] = useUpdateProfile(auth);
    const [signInWithEmailAndPassword, , signInLoading = loading, signInError = error] = useSignInWithEmailAndPassword(auth);

    const messageHandler = (error) =>{
        const userMessage = error?.message
        switch (userMessage) {
            case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                setErrorMessage('Password should be at least 6 characters long.')
                break;
            case 'Firebase: Error (auth/email-already-in-use).':
                setErrorMessage('This email is used once.')
                break;
            case 'Firebase: Error (auth/wrong-password).':
                setErrorMessage('Oops,looks like password is incorrect.')
                break;
            case 'Firebase: Error (auth/user-not-found).':
                setErrorMessage('Please give valid account info.')
                break;
            case 'Firebase: Error (auth/operation-not-allowed)':
                setErrorMessage('Please consider another signIn/signUp option.')
                break;
            default:
                setErrorMessage(userMessage)
                break;
        }
    }

    useEffect(() => {
        switch (authProvider) {
            case 'signUp':
                messageHandler(signUpError)
                break;
            case 'signIn':
                messageHandler(signInError)
                break;
            case 'updating':
                messageHandler(updatingError)
                break;
            case 'googleSignIn':
                messageHandler(googleSignInError)
                break;
            default:
                messageHandler('')
        }
    },[signInError, updatingError,signUpError,authProvider,googleSignInError])

   


    return {createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signInWithGoogle,errorMessage,setAuthProvider}
}
