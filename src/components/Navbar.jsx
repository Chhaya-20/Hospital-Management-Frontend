import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Styles/Main.css'

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle button click
  const handleClick = () => {
    if(buttonText=="Login as Patient")
    {
      navigate("/login")
    }
    else{
      navigate('/doctorlogin');
    }
    // if (location.pathname === '/doctorlogin' || location.pathname === '/doctorsignup') {
    //   console.log("here")
    //   navigate('/doctorlogin');
    // } else {
    //   navigate('/login');
    // }
  };

  const buttonText = (location.pathname === '/doctorlogin' || location.pathname === '/doctorsignup')
    ? 'Login as Patient'
    : 'Become Doctor';

  return (
    <>
    

<app-header>
        <header >
          <div
            
            className="d-flex align-items-center justify-content-between py-1 "
          >
            <button
              
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#hambergurMenu"
              id="header_hamburger"
              className="navbar-toggler p-0 order-md-1 me-1 m-md-0"
            >
              <img
                
                src="./assets/images/hambergur.svg"
                alt=""
                width="32"
              />
            </button>
            <a
            style={{
              "padding":"0px"
            }}
              
              routerlink="/"
              id="header_logo"
              className="d-flex align-items-center col-3 me-3 text-dark text-decoration-none logo"
              href="/"
            >
              <img
                style={{
                  "height":"100%"
                }}
                src="https://marketplace.canva.com/EAE2x-ic0Gk/1/0/1600w/canva-caduceus-logo%2Chealth-logo%2Cmedical-logo-2lhCTZ-v9hc.jpg"
                alt=""
                width="102"
              />
            </a>
            <div
              
              className="col-7 col-lg-8 text-end d-flex align-items-center justify-content-end ms-md-4 ms-lg-2"
            >
            
              <div
                
                className="dropdown chat d-flex align-items-center d-none d-md-flex"
              >
               
                <ul
                  
                  aria-labelledby="header_needhelp"
                  className="dropdown-menu"
                >
                
                </ul>
              </div>
              {location.pathname !== '/doctorlogin' && location.pathname !== '/doctorsignup' && (
  <button className="btn btn-primary" type="button" onClick={() => handleClick(buttonText)}>
    {buttonText}
  </button>
)}

           
           
             
            </div>
          </div>
       
        </header>
    
      
      </app-header>
    </>
  );
}

export default Navbar;



