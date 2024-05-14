

import React, { useState, useEffect } from "react";
import "./Styles/Main.css";
import Navbar from "./Navbar";
import Footer from "./pages/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetDoctor } from "../reducers/Patient/Profile";
import { toast } from "react-toastify";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await dispatch(GetDoctor());
        setLoading(false);
        
        if (!response || response.length === 0) {
          setSlots([]);
        } else {
          setSlots(response.payload);
        }
      } catch (error) {
        setLoading(false);
        // Replace toast.error with a proper notification method
        toast.error("An error occurred. Please try again.");
      }
    };

    fetchData();
  }, [dispatch]);

  const book = async (id) => {
    localStorage.removeItem("id");
    localStorage.setItem("id", id);
    navigate("/slots");
  };

  // Filter function for search
  const filteredSlots = slots.filter((slot) => {
    return (
      slot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slot.specialities.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearchOpen = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar setSearchOpen={handleSearchOpen} />
      <div className={`search-container ${isSearchOpen ? "open" : ""} my-1`}>
        {isSearchOpen && (
          <input
            style={{
              boxShadow: "0 0 6px 0 #00789d",
              width: "40%",
              border: "1px solid #a5cbd7",
              borderRadius: "10px",
              padding: "0.5rem",
            }}
            type="text"
            className="search-input my-2 p-2"
            placeholder="Search by name or speciality"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Placeholder for additional content */}
          </div>
        </div>
      </div>

      {loading ? (
        <div
          style={{
            height: "70vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "10vh" }}
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
            alt="Loading"
          />
        </div>
      ) : (
        <>
          {Array.isArray(filteredSlots) && filteredSlots.length > 0 && (
            <div>
              <h3 className="mt-4">All Available Doctors</h3>
              <div className="row m1 m-0 mx-auto d-flex justify-content-xl-start justify-content-sm-center justify-content-xs-center">
                {filteredSlots.map((slot, index) => (
                  <div
                    className="col-xxl-4 col-xl-5 col-sm-7 col-xs-8 col-lg-6"
                    key={index}
                  >
                    <div className="d-flex align-items-center cards m-3">
                      <div className="dr-rating d-flex flex-column align-self-normal align-items-center p-2 py-4 p-sm-3 border-end">
                        <figure className="mb-2">
                          <a
                            className="cursor-pointer"
                            title={`Dr ${slot.name}, Radiologist`}
                          >
                            <img
                              width="84"
                              className="rounded-circle"
                              alt={`Radiologist in Chandigarh`}
                              src={
                                slot.gender !== "Male"
                                  ? "https://cdn.askapollo.com/live/images/doctors/defaultprofilepicbig.jpg"
                                  : "https://cdn.askapollo.com/live/images/doctors/defaultprofilepicmale.png"
                              }
                              id={`doctorlist_img_${slot._id}`}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="d-lg-flex d-xs-flex d-sm-flex pb-4 pb-lg-0 equal-columns">
                        <div className="dr-dscpn pt-4 pb-3 px-2 px-lg-4 px-xl-4 pb-lg-4 p-xxl-4 p-sm-4 p-xl-3">
                          <h3 className="cursor-pointer">{slot.name}</h3>
                          <div className="spec-group">
                            <p>
                              {slot.specialities}
                              <span className="mx-2">|</span>
                              {slot.experience} yrs
                            </p>
                          </div>
                          <hr />
                          <div className="language d-flex align-items-center pb-3">
                            <img
                              src="https://www.askapollo.com/assets/images/language.svg"
                              alt=""
                              width="16"
                              className="me-1"
                            />
                            <span>English</span>
                          </div>
                          <div className="language d-flex align-items-center">
                            <img
                              src="https://www.askapollo.com/assets/images/qualification.svg"
                              alt=""
                              width="16"
                              className="me-1"
                            />
                            <span className="data_info">
                              {slot.qualification}
                            </span>
                          </div>
                        </div>
                        <div className="next-available d-flex flex-column justify-content-center text-center px-3 px-md-3 p-lg-4">
                          <p className="mb-2">
                            <strong className="d-lg-block ms-2 ms-lg-0">
                              <span>
                                <span
                                  aria-hidden="true"
                                  className="icon-clock pull-left"
                                ></span>
                                <div className="mLeft20"> {slot.seat} </div>
                              </span>
                            </strong>
                          </p>
                          <a
                            onClick={() => {
                              book(slot._id);
                            }}
                            href="javascript:void(0)"
                            id="book_appointment_search_bookappointment"
                            className="btn btn-primary text-uppercase"
                          >
                            book appointment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
}

export default Main;

