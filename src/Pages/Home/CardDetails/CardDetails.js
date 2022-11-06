import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({user}) => {
    const {title,image,_id}=user
    return (
        <div className="card card-compact p-4 bg-gray-400 w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body bg-green-400 rounded-xl">
          <div className="card-actions flex items-center justify-between">
          <h2 className="card-title text-black">{title}</h2>
            <Link to={`/event/${_id}`}><button className="btn btn-ghost text-black">Check out</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;