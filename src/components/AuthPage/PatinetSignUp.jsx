
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
import Navbar from '../Navbar'

function PatinetSignUp() {
  return (
    <>
    <Navbar/>
    <div className="container main" style={{"width":"40%"}}>
     
      <div className="forms ">
      <h2>Create Patient Account</h2>
      <hr/>
      <form className=''>
        <div className="mb-3">
        <label htmlFor="Name" className="form-label">Name</label>
      <input name='name' type="text" className="form-control" id="Name" />
           
        </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input  name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input name='password' type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
      <label htmlFor="age" className="form-label">Age</label>
      <input name='age' type="text" className="form-control" id="age"/>
    </div>
    <div className="mb-3">
      <label htmlFor="contact" className="form-label">Contact</label>
      <input name='contact' type="text" className="form-control" id="contact"/>
    </div>
   
    <button type="submit" className="btn btn-primary">SignUp</button>
    <p>Already have an account ? <a href="/login">Login</a></p>
  </form>
      </div>
    </div>
     </>
  )
}

export default PatinetSignUp






