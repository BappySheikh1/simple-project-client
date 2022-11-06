import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Group 1329.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import {  toast } from 'react-toastify';

const Header = () => {
    
        const {user,userLogOut}=useContext(AuthContext)
        
       const handleLogOut=()=>{
        userLogOut()
        .then(()=> {
         toast.success('user log out successfully',{autoClose: 500})
         })
         .catch(err=> console.log(err))
       }
      
          const menuItems=<>
          <li className='font-semibold'><Link to='/'>Home</Link></li>
          <li className='font-semibold'><Link to='/'>Donation</Link></li>
          <li className='font-semibold'><Link to='/event'>Events</Link></li>
          <li className='font-semibold'><Link to='/'>Blog</Link></li>
          {
            user?.uid ? 
            
            <li className='font-semibold'><button onClick={handleLogOut}>Log Out</button></li> 
            
            :
            <>
            <li className='font-semibold'><Link to='/login'>Log in</Link></li>

            </>
      
          }
         
          </>
          return (
              <div>
                 <div  className="navbar bg-base-100 h-12 mb-12 pt-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className='btn btn-ghost normal-case text-xl'> 
          <img src={logo} style={{height:'50px',width:'80px'}}  alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
        <Link to='/register'><button className='btn btn-primary mr-7'>Register</button></Link>
        <Link to='/register'><button className='btn btn-warning text-black mr-10'>Admin</button></Link>
        </div>
      </div>
              </div>
          );
 
      
};

export default Header;