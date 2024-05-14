import React, { useState, useEffect } from 'react';
import { createuser } from '../../reducers/Doctor/DoctorAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../Styles/Login.css';
import { toast } from 'react-toastify';

function DoctorSignUp() {
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialities: '',
    experience: '',
    qualification: '',
    locality:'',
    gender:'',
    seat:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    if(localStorage.getItem('doctor')) {
      navigate('/doctorpage');
    }
  }, []);

  const Signup = (e) => {
    e.preventDefault();
    setLoading(true); 
toast("Please wait ! It may take some time")
    dispatch(createuser(formData))
      .then((response) => {
        setLoading(false);
        if (response.payload.success) {
          navigate('/doctorpage');
        } else {
          toast(response.payload);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("An error occurred. Please try again.");
      });
  };
  
  return (
    <>
      


      <Navbar />
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "10vh" }}
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
            alt=""
          />
          {/* <p>Loading....</p> */}
        </div>
      ):(
        <div className="container main my-3">
        <div className="forms ">
          <h2>Create Doctor Account</h2>
          <hr />
          <form className='' onSubmit={Signup}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">Name</label>
              <input
                name='name'
                type="text"
                className="form-control"
                id="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                name='email'
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                name='password'
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={formData.password}
                onChange={handleChange}
                // required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="specialities" className="form-label">Specialities</label>
              <input
                name='specialities'
                type="text"
                className="form-control"
                id="specialities"
                value={formData.specialities}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="experience" className="form-label">Experience</label>
              <input
                name='experience'
                type="text"
                className="form-control"
                id="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="qualification" className="form-label">Qualification</label>
              <input
                name='qualification'
                type="text"
                className="form-control"
                id="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
              />
            </div>



            <div className="mb-3">
              <label htmlFor="locality" className="form-label">Locality</label>
              <input
                name='locality'
                type="text"
                className="form-control"
                id="locality"
                value={formData.locality}
                onChange={handleChange}
                required
              />
            </div>



            <div className="mb-3">
              <label htmlFor="Weekdays" className="form-label">Weekdays (eg.SUN-MON)</label>
              <input
                name='seat'
                type="text"
                className="form-control"
                id="seat"
                value={formData.seat}
                onChange={handleChange}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender (Type Male/Female)</label>
              <input
                name='gender'
                type="text"
                className="form-control"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <p className='mb-0'>Already have an account? <Link to="/doctorlogin">Login</Link></p>
          </form>
        </div>
      </div>
      )
    }


     
    </>
  );
}

export default DoctorSignUp;
