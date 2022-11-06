import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loadding} =useContext(AuthContext)
     const location=useLocation()

    if(loadding){
        return <p className="text-xl">loadding..........</p>
    }

    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;