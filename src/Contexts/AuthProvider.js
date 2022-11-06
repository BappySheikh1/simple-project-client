import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';


export const AuthContext =createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState('')
    const [loadding,setLoadding]=useState(true)

    const createUser=(email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
   
    const logInUser=(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userProfileupdate=(name)=>{
       return updateProfile(auth.currentUser,{
        displayName: name
       })
    }
    
    const userLogOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoadding(false)
        })

        return ()=> unsubscribe()
    },[])
    const authInfo={
        user,
        loadding,
        createUser,
        logInUser,
        userLogOut,
        userProfileupdate,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;