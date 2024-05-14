import React from 'react';
import '../Doctor/Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // Using NavLink instead of Link

function Sidebar() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem('patient');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <a href="/"><img
        src="https://user-images.githubusercontent.com/100460788/215811132-40070d36-862a-4154-adc0-903c6fa65394.jpg"
        alt="Logo"
        width="45"
        height="45"
        className="d-inline-block align-text-top"
      /></a>
      
      <ul>
        <h4 style={{"color":"black" , "textDecoration":"underline"}}>Your Profile</h4>
        <li>
          <NavLink to="/allslots" className="sidebar-link" activeclassname="active">
            All Slots
          </NavLink>
        </li>
        <li>
          <NavLink to="/patientslot" className="sidebar-link" activeclassname="active">
            Your Booked Slot
          </NavLink>
        </li>
        <li>
          <NavLink to="/patientprofile" className="sidebar-link" activeclassname="active">
            Manage profile
          </NavLink>
        </li>
      </ul>
      <button onClick={Logout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
