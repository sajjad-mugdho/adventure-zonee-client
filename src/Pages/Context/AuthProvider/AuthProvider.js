import React, { createContext, useEffect, useState } from 'react';
import app from '../../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth"

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //Sign Up
    const signUpEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login Email Password
    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Google

    const signUpGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // Github

    const signInGithub = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])
    const authInfo = { user, loading, signUpEmail, loginWithEmail, signUpGoogle, signInGithub, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;