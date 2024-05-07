import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom";
import {BookSlot} from '../../../reducers/Doctor/Slot'
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";

import './style.css'


function BookedSlot() {

  const dispatch = useDispatch();
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem('doctor')) {
      navigate('/doctorlogin');
    } else {
      setLoading(true);
      dispatch(BookSlot())
        .then((response) => {
          console.log(response);
          setLoading(false);
          if (!response.payload || response.payload.length === 0) {
            setSlots([]);
          } else {
            setSlots(response.payload);
          }
        })
        .catch((error) => {
          setLoading(false);
          alert("An error occurred. Please try again.");
        });
    }
  }, []);


  const [showNavbar, setShowNavbar] = useState(false);
  const[sidebar,setside]=useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setShowNavbar(true);
        setside(false)
      } else {
        setShowNavbar(false);
        setside(true)
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set navbar visibility based on screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>
    {showNavbar && <Navbar />}
<div className="row">
        <div className={`col-xxl-2 col-xl-2 col-lg-2 col-md-3  ${showNavbar ? 'col-0' : ''}`}>
        {sidebar && <Sidebar />}
             </div>
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
          </div>
        ) : (
          <>
            {Array.isArray(slots) && slots.length > 0 ? (
              <div cclassName={`col-xxl-10 col-xl-10 mt-5 col-lg-10 col-md-9 ${showNavbar ? 'col-12' : ''}`}>
                <div className="container slot">
                  <h1>Your booked Slots</h1>
                  <table className="table table-striped mt-4">
                    <thead>
                      <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {slots.map((slot, index) => (
                        <tr key={slot.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{slot.startTime}</td>
                          <td>{slot.endTime}</td>
                         
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className={`d-flex  col-lg-10 col-md-9 flex-column justify-content-center align-items-center  mt-5  ${showNavbar ? 'col-12' : ''}`}>
                <h3>You have no booked slots yet.</h3>
              </div>
            )}
          </>
        )}
      </div>
      </>
  )
}

export default BookedSlot