// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Styles/Main.css";
// import { FaSearch } from "react-icons/fa";

// function Navbar({ setSearchOpen }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleClick = () => {
//     setSearchOpen((prev) => !prev);
//   };


 
//   // const buttonText =
//   //   location.pathname === "/doctorlogin" || location.pathname === "/doctorsignup"
//   //     ? "Login as Patient"
//   //     : "Become Doctor / Patient";

//   const buttonText = 
//   location.pathname==="/login" || location.pathname==="/signup"
//   ?"Login"
//   :""


//       const handleClick1=()=>{
//         if(buttonText=="Login as Patient")
//           {
//             navigate("/login");
//           }
//           else {
//             navigate("/doctorlogin")
//           }
    
//       }

//   return (
//     <>
//       <app-header>
//         <header>
//           <div className="d-flex align-items-center justify-content-between py-1 ">
//             <button
//               type="button"
//               data-bs-toggle="modal"
//               data-bs-target="#hambergurMenu"
//               id="header_hamburger"
//               className="navbar-toggler p-0 order-md-1 me-1 m-md-0"
//             >
//               <img src="./assets/images/hambergur.svg" alt="" width="32" />
//             </button>
//             <a
//               style={{
//                 padding: "0px",
//               }}
//               routerlink="/"
//               id="header_logo"
//               className="d-flex align-items-center col-3 me-3 text-dark text-decoration-none logo"
//               href="/"
//             >
//               <img
//                 style={{
//                   height: "100%",
//                 }}
//                 src="https://marketplace.canva.com/EAE2x-ic0Gk/1/0/1600w/canva-caduceus-logo%2Chealth-logo%2Cmedical-logo-2lhCTZ-v9hc.jpg"
//                 alt=""
//                 width="102"
//               />
//             </a>
//             <div className="col-7 col-lg-8 text-end d-flex align-items-center justify-content-end ms-md-4 ms-lg-2">
//               <div className="dropdown chat d-flex align-items-center d-none d-md-flex">
//                 <ul
//                   aria-labelledby="header_needhelp"
//                   className="dropdown-menu"
//                 ></ul>
//               </div>
//               {location.pathname === "/" && (
//               <div
//                 className="me-3"
//                 style={{ cursor: "pointer" }}
//                 onClick={handleClick}
//               >
//                 <FaSearch />
//               </div>
//             )}

             
//                   <button
//                     className="btn btn-primary"
//                     type="button"
//                     onClick={() => handleClick1(buttonText)}
//                   >
//                     {buttonText}
//                   </button>
                
//             </div>
//           </div>
//         </header>
//       </app-header>
//     </>
//   );
// }

// export default Navbar;






// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Styles/Main.css";
// import { FaSearch } from "react-icons/fa";

// function Navbar({ setSearchOpen }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Function to handle button click
 

//   const handleClick = () => {
//     setSearchOpen((prev) => !prev);
//   };





//   // Function to handle button click only when location is "/"
//   // const handleClick1 = () => {
//   //   if (buttonText === "Login as Patient") {
//   //     navigate("/login");
//   //   } else {
//   //     navigate("/doctorlogin");
//   //   }
//   // };

//   // const buttonText =
//   //   location.pathname === "/doctorlogin" ||
//   //   location.pathname === "/doctorsignup"
//   //     ? "Login as Patient"
//   //     : "Become Doctor";

//   const isPatientLoggedIn = localStorage.getItem("patient");

//   useEffect(() => {
//     const buttonText = isPatientLoggedIn ? "Logout" : "Login";
//     setButtonText(buttonText); // Assuming you have a state variable to store buttonText
//   }, [isPatientLoggedIn]);
  
//   // Set the buttonText accordingly
  
//   const handleClick1 = () => {
//     if (buttonText === "Login") {
//       navigate("/login");
//     } else {
//       // Clear the patient token from localStorage on logout
//       localStorage.removeItem("patient");
//       buttonText = "Login"
//       // Redirect to the home page ("/")
//       navigate("/");
//     }
//   };
  



//   return (
//     <>
//       <app-header>
//         <header>
//           <div className="d-flex align-items-center justify-content-between py-1 ">
//             <button
//               type="button"
//               data-bs-toggle="modal"
//               data-bs-target="#hambergurMenu"
//               id="header_hamburger"
//               className="navbar-toggler p-0 order-md-1 me-1 m-md-0"
//             >
//               <img src="./assets/images/hambergur.svg" alt="" width="32" />
//             </button>
//             <a
//               style={{
//                 padding: "0px",
//               }}
//               routerlink="/"
//               id="header_logo"
//               className="d-flex align-items-center col-3 me-3 text-dark text-decoration-none logo"
//               href="/"
//             >
//               <img
//                 style={{
//                   height: "100%",
//                 }}
//                 src="https://marketplace.canva.com/EAE2x-ic0Gk/1/0/1600w/canva-caduceus-logo%2Chealth-logo%2Cmedical-logo-2lhCTZ-v9hc.jpg"
//                 alt=""
//                 width="102"
//               />
//             </a>
//             <div className="col-7 col-lg-8 text-end d-flex align-items-center justify-content-end ms-md-4 ms-lg-2">
//               <div className="dropdown chat d-flex align-items-center d-none d-md-flex">
//                 <ul aria-labelledby="header_needhelp" className="dropdown-menu"></ul>
//               </div>
//               <div
//                 className="me-3"
//                 style={{ cursor: "pointer" }}
//                 onClick={handleClick}
//               >
//                 <FaSearch />
//               </div>

//               {location.pathname === "/" && (
//                 <button
//                   className="btn btn-primary"
//                   type="button"
//                   onClick={() => handleClick1(buttonText)}
//                 >
//                   {buttonText}
//                 </button>
//               )}
//             </div>
//           </div>
//         </header>
//       </app-header>
//     </>
//   );
// }

// export default Navbar;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Styles/Main.css";
// import { FaSearch, FaUser } from "react-icons/fa";

// function Navbar({ setSearchOpen }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [buttonText, setButtonText] = useState("Login");

//   useEffect(() => {
//     const isPatientLoggedIn = localStorage.getItem("patient");
//     const buttonText = isPatientLoggedIn ? "Logout" : "Login";
//     setButtonText(buttonText);
//   }, []);

//   const handleClick = () => {
//     setSearchOpen((prev) => !prev);
//   };

//   const handleClick1 = () => {
//     if (buttonText === "Login") {
//       navigate("/login");
//     } else {
//       localStorage.removeItem("patient");
//       setButtonText("Login");
//       navigate("/");
//     }
//   };

//   return (
//     <>
//       <app-header>
//         <header>
//           <div className="d-flex align-items-center justify-content-between py-1 ">
//             <button
//               type="button"
//               data-bs-toggle="modal"
//               data-bs-target="#hambergurMenu"
//               id="header_hamburger"
//               className="navbar-toggler p-0 order-md-1 me-1 m-md-0"
//             >
//               <img src="./assets/images/hambergur.svg" alt="" width="32" />
//             </button>
//             <a
//               style={{
//                 padding: "0px",
//               }}
//               routerlink="/"
//               id="header_logo"
//               className="d-flex align-items-center col-3 me-3 text-dark text-decoration-none logo"
//               href="/"
//             >
//               <img
//                 style={{
//                   height: "100%",
//                 }}
//                 src="https://marketplace.canva.com/EAE2x-ic0Gk/1/0/1600w/canva-caduceus-logo%2Chealth-logo%2Cmedical-logo-2lhCTZ-v9hc.jpg"
//                 alt=""
//                 width="102"
//               />
//             </a>
//             <div className="col-7 col-lg-8 text-end d-flex align-items-center justify-content-end ms-md-4 ms-lg-2">
//               <div className="dropdown chat d-flex align-items-center d-none d-md-flex">
//                 <ul aria-labelledby="header_needhelp" className="dropdown-menu"></ul>
//               </div>
//               <div className="me-3" style={{ cursor: "pointer" }} onClick={handleClick}>
//                 <FaSearch />
//               </div>

//               {location.pathname === "/" && (
//                 <>
//                   {localStorage.getItem("patient") ? (
//                     <div className="me-3" style={{ cursor: "pointer" }} onClick={()=>(navigate("/patientpage"))}>
//                       <FaUser />
//                     </div>
//                   ) : (
//                     <button className="btn btn-primary" type="button" onClick={handleClick1}>
//                       {buttonText}
//                     </button>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         </header>
//       </app-header>
//     </>
//   );
// }

// export default Navbar;


import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Styles/Main.css";
import { FaSearch, FaUser } from "react-icons/fa";

function Navbar({ setSearchOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonText, setButtonText] = useState("Login");

  useEffect(() => {
    const isPatientLoggedIn = localStorage.getItem("patient");
    const buttonText = isPatientLoggedIn ? "Logout" : "Login";
    setButtonText(buttonText);
  }, []);

  const handleClick = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleClick1 = () => {
    if (buttonText === "Login") {
      navigate("/login");
    } else {
      localStorage.removeItem("patient");
      setButtonText("Login");
      navigate("/");
    }
  };

  return (
    <>
      <app-header>
        <header>
          <div className="d-flex align-items-center justify-content-between py-1 ">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#hambergurMenu"
              id="header_hamburger"
              className="navbar-toggler p-0 order-md-1 me-1 m-md-0"
            >
              <img src="./assets/images/hambergur.svg" alt="" width="32" />
            </button>
            <a
              style={{
                padding: "0px",
              }}
              routerlink="/"
              id="header_logo"
              className="d-flex align-items-center col-3 me-3 text-dark text-decoration-none logo"
              href="/"
            >
              <img
                style={{
                  height: "100%",
                }}
                src="https://marketplace.canva.com/EAE2x-ic0Gk/1/0/1600w/canva-caduceus-logo%2Chealth-logo%2Cmedical-logo-2lhCTZ-v9hc.jpg"
                alt=""
                width="102"
              />
            </a>
            <div className="col-7 col-lg-8 text-end d-flex align-items-center justify-content-end ms-md-4 ms-lg-2">
              <div className="dropdown chat d-flex align-items-center d-none d-md-flex">
                <ul aria-labelledby="header_needhelp" className="dropdown-menu"></ul>
              </div>
              {location.pathname === "/" && (
                <div className="me-3" style={{ cursor: "pointer" }} onClick={handleClick}>
                  <FaSearch />
                </div>
              )}

              {localStorage.getItem("patient") ? (
                <div className="me-3" style={{ cursor: "pointer" }} onClick={()=>(navigate("/patientpage"))}>
                  <FaUser />
                </div>
              ) : (
                <button className="btn btn-primary" type="button" onClick={handleClick1}>
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
