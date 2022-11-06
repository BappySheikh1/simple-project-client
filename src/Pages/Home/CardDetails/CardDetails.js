import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({user}) => {
    const {title,image,_id}=user
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-end">
            <Link to={`/event/${_id}`}><button className="btn btn-ghost">Check out</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;