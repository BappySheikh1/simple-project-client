import React, { useEffect, useState } from 'react';

const UpdateUserCard = ({update,handleDetele}) => {
    const [singleData,setSingleData]=useState({})
    const {title,description,service,_id}=update
    
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${service}`)
        .then(res => res.json())
        .then(data => {
            setSingleData(data);
        })
    },[])
   
    

    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-xl">
             <figure><img style={{height:'120px'}} className='rounded-xl pl-5' src={singleData.image}  alt=""/></figure>
             <div className="card-body">
               <h2 className="card-title">Title: {title}</h2>
                <p>Description: {description}</p>
             <div className="card-actions justify-end">
             <button className="btn btn-warning font-bold" onClick={()=>handleDetele(_id)}>Delete</button>
            </div>
         </div>
         </div>
        </div>
    );
};

export default UpdateUserCard;