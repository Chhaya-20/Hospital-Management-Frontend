import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom";
import {BookSlot} from '../../../reducers/Doctor/Slot'
import { useDispatch } from "react-redux";

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




  return (
<div className="row">
        <div className="col-2">
          <Sidebar />
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
              <div className="col-10 mt-5">
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
              <div className="d-flex flex-column justify-content-center align-items-center col-10 mt-5">
                <h3>You have no booked slots yet.</h3>
              </div>
            )}
          </>
        )}
      </div>
  )
}

export default BookedSlot