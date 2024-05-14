import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSlot } from "../../../reducers/Doctor/AllSlot";
import { DeleteSlot, EditSlot } from "../../../reducers/Doctor/Slot";
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
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
            toast.error("An error occurred. Please try again.");
          });
      }
    };
  
    checkDoctorAuthentication(); 
  }, [dispatch, navigate]);


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
          toast.error("An error occurred. Please try again.");
          });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("An error occurred. Please try again.");
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
              toast.error("An error occurred. Please try again.");
            });
        })
        .catch((error) => {
          setLoading(false);
          toast.error("An error occurred. Please try again.");
        });
    }
  };

  return (
    <>
     {showNavbar && <Navbar />}
      <div className="row">
     
        <div className={`col-xxl-2 col-xl-2 col-lg-2 col-md-3  ${showNavbar ? 'col-0 ' : ''}`}>
          {sidebar && <Sidebar />}
        </div>
        <div className={`col-xxl-10 col-xl-10 mt-5 col-lg-10 col-md-9 ${showNavbar ? 'col-12 m-0' : ''}`}>

          {loading ? (
            <div
              style={{
                height: "100vh",
                width: "80vw",
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
                <div className=" slot">
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
