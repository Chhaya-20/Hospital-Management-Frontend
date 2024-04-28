import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import {ViewBookSlot , DeleteSlot } from "../../../reducers/Patient/Slots";
import { useDispatch } from "react-redux";
function BookSlot() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    dispatch(ViewBookSlot())
      .unwrap()
      .then((response) => {
        console.log(response);
        setLoading(false);
        if (!response || response.length === 0) {
          setSlots([]);
        } else {
          setSlots(response);
        }
      })
      .catch((error) => {
       
        setLoading(false);
        alert(error);
      });

  },[dispatch])


  const Cancel = (id) => {
    setLoading(true);
    dispatch(DeleteSlot(id)).unwrap()
      .then((response) => {
        setLoading(true);
        dispatch(ViewBookSlot())
          .unwrap()
          .then((response) => {
            console.log(response);
            setLoading(false);
            if (!response || response.length === 0) {
              setSlots([]);
            } else {
              setSlots(response);
            }
          })
          .catch((error) => {
            setSlots([]);
            setLoading(false);
    
          });
      })
      .catch((error) => {
        
        setLoading(false);
        alert("An error occurred. Please try again.");
      });
  };




  return (
    <>
    <div className="row">
      <div className="col-2">
<Sidebar/>
      </div>
      <div className="col-10">
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
                <div className="container slot">
                  <h1>Your Slots</h1>
                  <hr/>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {slots.map((slot, index) => (
  <tr key={slot.id}>
    <th scope="row">{index + 1}</th>
    <td>{slot.startTime}</td>
    <td>{slot.endTime}</td>
    <td>
      <button onClick={()=>{Cancel(slot._id)}} className="btn btn-primary">
        Cancel Slot
      </button>
      {/* Edit and Delete button logic */}
    </td>
  </tr>
))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <>

                
                  <h3 style={{"marginTop":"20%"}}>No Slot Present</h3>
                  <button onClick={()=>{navigate("/patientpage")}} className="btn btn-primary">Book Slot</button>
                  </>
                
              )}
            </>
          )}
      </div>
    </div>
   
    </>
  );
}

export default BookSlot;
