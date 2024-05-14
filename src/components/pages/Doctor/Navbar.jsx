import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
            <li  className="nav-item"><Link to='/doctorpage' className={location.pathname === '/doctorpage' ? 'active nav-link active' : 'nav-link active'}>Your Slots</Link></li>
        <li  className="nav-item"><Link to='/addslot' className={location.pathname === '/addslot' ? 'active nav-link active' : 'nav-link active'}>Add Slot</Link></li>
        <li  className="nav-item"><Link to='/bookslots' className={location.pathname === '/bookslots' ? 'active nav-link active' : 'nav-link active'}>Booked Slot</Link></li>
        <li  className="nav-item"><Link to='/profile' className={location.pathname === '/profile' ? 'active nav-link active' : 'nav-link active'}>Manage Profile</Link></li>
       
       
       
      </ul>
      <form className="d-flex" role="search">
       
        <button className=" ms-3 btn btn-primary btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar