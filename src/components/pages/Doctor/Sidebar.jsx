import React from 'react';
import './Sidebar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const Logout = () => {
    console.log("here");
    localStorage.removeItem('doctor');
    navigate("/");
  };

  return (
    <div className="sidebar">
      <a href="/">      <img src="https://user-images.githubusercontent.com/100460788/215811132-40070d36-862a-4154-adc0-903c6fa65394.jpg" alt="Logo" width="45" height="45" className="d-inline-block align-text-top" /></a>

      <ul>
        <li><Link to='/doctorpage' className={location.pathname === '/doctorpage' ? 'active' : ''}>Your Slots</Link></li>
        <li><Link to='/addslot' className={location.pathname === '/addslot' ? 'active' : ''}>Add Slot</Link></li>
        <li><Link to='/bookslots' className={location.pathname === '/bookslots' ? 'active' : ''}>Booked Slot</Link></li>
        <li><Link to='/profile' className={location.pathname === '/profile' ? 'active' : ''}>Manage Profile</Link></li>
        <li> <button onClick={Logout} className='mt-4 btn btn-primary'>
        Logout
      </button></li>
        {/* <li><Link to='' className=''> </Link></li> */}
      </ul>
    
    </div>
  );
}

export default Sidebar;
