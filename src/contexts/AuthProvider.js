import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    // User Here Or Not : 
    const [user, setUser] = useState(null);
    // Loading State :
    const [loading, setLoading] = useState(true);

    // Sign Up with email and password :
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // SignIn With Email and Password :
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // Log Out :
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // User Here Or Not : 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])


    const authInfo = {
        createUser,
        signIn,
        logOut,
        updateUser,
        user,
        loading
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;