
import React, { useState, useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { createuser } from '../../reducers/Patient/PatientAuth';
import '../Styles/Login.css'
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../Navbar'

function PatinetSignUp() {

  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    contact: '',
  });

  useEffect(() => {
    if(localStorage.getItem('patient')) {
      navigate('/patientpage');
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };






  const SignUp = (e) => {
    e.preventDefault(); 
    dispatch(createuser(formData))
    .then((response) => {
      setLoading(false);
      if (response.payload.success) {
        navigate('/patientpage');
      } else {
        alert(response.payload);
      }
    })
    .catch((error) => {
      setLoading(false);
      alert("An error occurred. Please try again.");
    });
  };



  return (
    <>
    <Navbar/>
    <div className="container main" style={{"width":"40%"}}>
     
      <div className="forms ">
      <h2>Create Patient Account</h2>
      <hr/>
      <form method='POST' onSubmit={SignUp}>
        <div className="mb-3">
        <label htmlFor="Name" className="form-label">Name</label>
      <input   name='name' type="text" className="form-control" id="Name" value={formData.name}
                onChange={handleChange}
                required />
           
        </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input  name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.email}
                onChange={handleChange}
                required/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input name='password' type="password" className="form-control" id="exampleInputPassword1" value={formData.password}
                onChange={handleChange}
                required/>
    </div>
    <div className="mb-3">
      <label htmlFor="age" className="form-label">Age</label>
      <input name='age' type="text" className="form-control" id="age" value={formData.age}
                onChange={handleChange}
                required/>
    </div>
    <div className="mb-3">
      <label htmlFor="contact" className="form-label">Contact</label>
      <input name='contact' type="text" className="form-control" id="contact" value={formData.contact}
                onChange={handleChange}
                required/>
    </div>
   
    <button onClick={(e)=>{SignUp(e)}}  type="submit" className="btn btn-primary">SignUp</button>
    <p>Already have an account ? <Link to="/login">Login</Link></p>
  </form>
      </div>
    </div>
     </>
  )
}

export default PatinetSignUp






