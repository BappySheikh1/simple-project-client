import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loadding} =useContext(AuthContext)
    if(loadding){
        return <p className="text-xl">loadding..........</p>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;