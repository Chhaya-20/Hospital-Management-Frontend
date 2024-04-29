import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSlot } from "../../../reducers/Doctor/AllSlot";
import { DeleteSlot, EditSlot } from "../../../reducers/Doctor/Slot";
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";

function DoctorPage() {
  const dispatch = useDispatch();
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {


    if (!localStorage.getItem('doctor')) {
      navigate("/doctorlogin");
    }

    setLoading(true); 

    const checkDoctorAuthentication = () => {
      if (!localStorage.getItem("doctor")) {
        navigate("/doctorlogin");
      } else {
        setLoading(true);
        dispatch(getSlot())
          .then((response) => {
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
    };
  
    checkDoctorAuthentication(); 
  }, [dispatch, navigate]);
  

  const deleted = (id) => {
    setLoading(true);
    dispatch(DeleteSlot(id))
      .then((response) => {
        dispatch(getSlot())
          .then((response) => {
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
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred. Please try again.");
      });
  };

  const edit = (id, st, et) => {
    const startTime = window.prompt("Enter new Start Time", st);
    const endTime = window.prompt("Enter new End Time", et);
    if (startTime !== null && endTime !== null) {
      setLoading(true);
      dispatch(EditSlot({ id, startTime, endTime }))
        .then((response) => {
          dispatch(getSlot())
            .then((response) => {
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
        })
        .catch((error) => {
          setLoading(false);
          alert("An error occurred. Please try again.");
        });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 mt-5">
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
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {slots.map((slot, index) => (
                        <tr key={slot.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{slot.startTime}</td>
                          <td>{slot.endTime}</td>
                          <td>
                            <button
                              onClick={() =>
                                edit(slot._id, slot.startTime, slot.endTime)
                              }
                              type="button"
                              className="btn btn-primary mx-3"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleted(slot._id)}
                              type="button"
                              className="btn btn-primary"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="m-auto col-10 mt-5">
                  <h3>You have no slots yet.</h3>
                  <button
                    onClick={() => navigate("/addslot")}
                    className="btn btn-primary"
                  >
                    Add Slot
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DoctorPage;
