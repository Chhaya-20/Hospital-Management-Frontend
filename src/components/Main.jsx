import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Styles/Main.css';

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToPage = () => {
      if (localStorage.getItem('patient')) {
        navigate('/patientpage');
      } else if (localStorage.getItem('doctor')) {
        navigate('/doctorpage');
      }
    };

    redirectToPage(); // Call the function immediately

    // Note: navigate is added as a dependency
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6 left-column" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Hospital Management Software</h1>
            <p>Everything you need to run a hospital</p>
            <div className="buttons">
              <button type="button" className="btn btn-primary mx-3" onClick={() => navigate('/login')}>Login</button>
              <button type="button" className="btn btn-primary" onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
          </div>
          <div className="col-6 right-column" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://www.karexpert.com/wp-content/uploads/2022/04/HIMS-1.webp"
              alt="Hospital Management Software"
              className="animated-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
