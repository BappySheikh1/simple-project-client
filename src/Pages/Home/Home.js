import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDetails from './CardDetails/CardDetails';



const Home = () => {
    const users =useLoaderData()
    // console.log(users);
    return (
        <div>
            <div>
           <h2 className="text-5xl font-semibold text-center my-10"> I grow by helping people in need.</h2>
           <div className='mb-5 text-center'>
           <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
           <button className='w-28 h-12 rounded bg-blue-600 text-white font-semibold'>Search</button>
           </div>
            </div>
            <div className='grid gap-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 my-20 px-9'>
               {
                users.map(user => <CardDetails key={user._id} user={user}/>)
               }
            </div>
        </div>
    );
};

export default Home;