import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
 
  const {logInUser}=useContext(AuthContext)
   const navigate =useNavigate()
   const location =useLocation()
   let from = location.state?.from?.pathname || "/";

    const handleSubmit =(event)=>{
        event.preventDefault()
        const form =event.target
        const email =form.email.value
        const password =form.password.value
        // console.log(email,password);
        logInUser(email,password)
        .then(result =>{
          const user=result.user
          console.log(user);
          form.reset();
          const userInfo={
            email: user.email
          }
          fetch('http://localhost:5000/jwt',{
          method:"POST" ,
          headers:{
             "Content-type":'application/json'
           },
           body: JSON.stringify(userInfo)
           
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            localStorage.setItem('tokenSimple',data.token);
            navigate(from,{replace: true })
          })
        
        })
        .catch(err =>{
          console.log(err);
        })
    }

    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a  className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;