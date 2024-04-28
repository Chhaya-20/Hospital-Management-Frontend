import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle button click
  const handleClick = () => {
    if (location.pathname === '/doctorlogin' || location.pathname === '/doctorsignup') {
      navigate('/login');
    } else {
      navigate('/doctorlogin');
    }
  };

  const buttonText = (location.pathname === '/doctorlogin' || location.pathname === '/doctorsignup')
    ? 'Login as Patient'
    : 'Become Doctor';

  return (
    <>
      <nav className="navbar bg-body-tertiary mb-5">
        <div className="container-fluid">
          <a href='/' className="navbar-brand"><img src="https://user-images.githubusercontent.com/100460788/215811132-40070d36-862a-4154-adc0-903c6fa65394.jpg" alt="Logo" width="45" height="45" className="d-inline-block align-text-top"/></a>
          <form className="d-flex">
            <button className="btn btn-primary" type="button" onClick={handleClick}>{buttonText}</button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


