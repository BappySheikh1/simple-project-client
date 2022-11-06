import React, { useEffect, useState } from 'react';
import UpdateUserCard from './UpdateUserCard';

const AddEventDetails = () => {
   const [userUpdate,setUserUpdate]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/usersPost')
        .then(res => res.json())
        .then(data => {
            setUserUpdate(data)
        })
    },[])

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