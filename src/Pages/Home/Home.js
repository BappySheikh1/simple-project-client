import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails/CardDetails';
import './Home.css'


const Home = () => {
    const [results,setResults]=useState([])
    const [count,setCount]=useState(0)
    const [page,setPage]=useState(0)
    const [size,setSize]=useState(5)
    // console.log(users);
  useEffect(()=>{
    fetch(`http://localhost:5000/users?page=${page}&size=${size}`)
    .then(res=> res.json())
    .then(data =>{
        setCount(data.count)
        setResults(data.result)
    })
  },[page,size])

    const pages=Math.ceil(count / size)
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
                results.map(user => <CardDetails key={user._id} user={user}/>)
               }
            </div>
            <div className="pagination">
                <p>Currently selected page: {page}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                    
                    className={page === number && "selected"}
                    key={number}
                    onClick={()=> setPage(number)}
                    >
                        {number + 1}
                    </button>)
                }
                <select className='text-3xl border p-3 rounded-xl' name="" id="" onChange={(event)=>setSize(event.target.value)}>
                    <option value="5">3</option>
                    <option value="10" selected>4</option>
                    <option value="20" >5</option>
                </select>
            </div>
        </div>
    );
};

export default Home;