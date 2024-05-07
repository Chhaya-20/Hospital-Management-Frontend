import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
            <li  class="nav-item"><Link to='/doctorpage' className={location.pathname === '/doctorpage' ? 'active nav-link active' : 'nav-link active'}>Your Slots</Link></li>
        <li  class="nav-item"><Link to='/addslot' className={location.pathname === '/addslot' ? 'active nav-link active' : 'nav-link active'}>Add Slot</Link></li>
        <li  class="nav-item"><Link to='/bookslots' className={location.pathname === '/bookslots' ? 'active nav-link active' : 'nav-link active'}>Booked Slot</Link></li>
        <li  class="nav-item"><Link to='/profile' className={location.pathname === '/profile' ? 'active nav-link active' : 'nav-link active'}>Manage Profile</Link></li>
       
       
       
      </ul>
      <form class="d-flex" role="search">
       
        <button class=" ms-3 btn btn-primary btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar