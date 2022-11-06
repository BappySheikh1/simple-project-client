import { getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';


export const AuthContext =createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState('')
    const [loadding,setLoadding]=useState(true)

    

    const authInfo={
        user,
        loadding,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;