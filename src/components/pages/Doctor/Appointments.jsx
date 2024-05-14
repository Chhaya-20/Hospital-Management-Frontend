import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getSlot1 } from "../../../reducers/Doctor/AllSlot";
import { getSlot, BookSlot } from "../../../reducers/Patient/Slots";
import { useDispatch } from "react-redux";
import Navbar from "../../Navbar";
import { toast } from "react-toastify";

function Appointments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await dispatch(getSlot1()).unwrap();
        setLoading(false);
        if (!response || response.length === 0) {
          setSlots([]);
        } else {
          setSlots(response);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("An error occurred. Please try again.");
      }
    };

    fetchData();
  }, [dispatch, navigate]);

  const location = useLocation();

  const Book = (id) => {
    if (!localStorage.getItem("patient")) {
      toast.error("Please first login to book Slot!");
      navigate("/login", { state: { from: "/appointments" } });
      return;
    }
    else{
      navigate("/details", {state:{from:"/appointments" , id1:id}})
    }
    // setLoading(true);
    // dispatch(BookSlot(id))
    //   .then((response) => {
    //     dispatch(getSlot())
    //       .then((response) => {
    //         setLoading(false);
    //         toast("Your Slot is Successfully Booked!");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         setLoading(false);
    //         toast.error("An error occurred. Please try again.");
    //       });
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     toast.error("An error occurred. Please try again.");
    //   });
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div
          style={{
            height: "80vh",
            width: "90vw",
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
            <div className="slot m-5">
              <h1>All Available Slots</h1>
              <hr />
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
                        {slot.available ? (
                          <button
                            onClick={() => {
                              Book(slot._id);
                            }}
                            className="btn btn-primary"
                          >
                            Schedule
                          </button>
                        ) : (
                          <button className="btn btn-secondary" disabled>
                            Booked
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="m-auto col-10 mt-5">
              <h3>No Slot Present</h3>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Appointments;
