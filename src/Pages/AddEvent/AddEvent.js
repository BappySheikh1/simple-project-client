import React from 'react';
import Datetime from 'react-datetime';
import { useLoaderData } from 'react-router-dom';

const AddEvent = () => {
   
    const {title,_id}=useLoaderData()
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form =event.target
        const title=form.title.value
        const description=form.description.value
        console.log(title, description);
        const userOrder={
            title: title,
            description: description,
            service: _id
        }

        fetch('http://localhost:5000/usersPost',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(userOrder) 
        })
    }
    return (
        <div className='bg-gray-500  my-28 pl-10 p-10 ml-16 mx-auto'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="" className='text-xl text-white'>Event Title</label> <br />
            <input type="text" defaultValue={title} name='title' placeholder="Event Title" className="input  w-1/2 my-6" /> 
           <br />
           <label htmlFor="" className='text-xl text-white'>Event Date</label>
           <br />
            <Datetime className='text-gray-400' name='dateTime' />
            <br />
            
             <span className='text-xl text-white'>Description</span>
             <br />
            <textarea name='description' className="textarea textarea-info w-1/2" placeholder="Event Description"></textarea>
           
             <div className='mt-10'>
                <button type='submit' className='btn w-1/2'>Check Out</button>
             </div>
        </form>
               
        </div>
    );
};

export default AddEvent;