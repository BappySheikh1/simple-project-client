import React, { useContext, useEffect, useState } from 'react';
import UpdateUserCard from './UpdateUserCard';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddEventDetails = () => {
    const {user,userLogOut}=useContext(AuthContext) ;
   const [userUpdate,setUserUpdate]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/usersPost?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('tokenSimple')}`
            }
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
               userLogOut()
            }
            return res.json()
        })
        .then(data => {
            setUserUpdate(data)
        })
    },[user?.email,userLogOut])

    const handleDetele=(_id)=>{
        const agree =window.confirm('Are you sure this Product is deleted',_id)
        if(agree){
           fetch(`http://localhost:5000/usersPost/${_id}`,{
            method:"DELETE",
            headers:{
                "content-type" : 'application/json'
            }
           })
           .then(res => res.json())
           .then(data => {
             console.log(data);
             if(data.deletedCount > 0){
                alert('Deleted successful')
                 const remaining=userUpdate.filter(user => user._id !== _id)
                 setUserUpdate(remaining)
               
             }
           })
        }
    }
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-20 mx-20'>
            {
                userUpdate.map(update => <UpdateUserCard key={update._id} handleDetele={handleDetele} update={update} />)
            }
        </div>
    );
};

export default AddEventDetails;