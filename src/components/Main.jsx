
import React, { useState, useEffect } from "react";
import "./Styles/Main.css";
import Navbar from "./Navbar";
import Footer from "./pages/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetDoctor } from "../reducers/Patient/Profile";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await dispatch(GetDoctor());
        setLoading(false);
        console.log(response);
        if (!response || response.length === 0) {
          setSlots([]);
        } else {
          setSlots(response.payload);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        alert("An error occurred. Please try again.");
      }
    };

    fetchData();
  }, [dispatch]);



const book = async(id)=>{
  localStorage.removeItem("id");
  localStorage.setItem('id',id)
  navigate("/slots");
}
  

  return (
    <>
      <Navbar />
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
          {Array.isArray(slots) && slots.length > 0 && (
            <div>
              <h3 className="mt-4">All Available Doctors</h3>
              <div className="row  m-0 mx-auto d-flex justify-content-xl-start justify-content-sm-center justify-content-xs-center">
                {slots.map((slot, index) => (
                  <div className="col-xxl-4 col-xl-5 col-sm-7 col-xs-8 col-lg-6">
                       
                    <div
                      
                      class="d-flex align-items-center cards m-3"
                    >
                      <div
                        
                        class="dr-rating d-flex flex-column align-self-normal align-items-center p-2 py-4 p-sm-3 border-end"
                      >
                        <figure  class="mb-2">
                          <a
                            
                            class="cursor-pointer"
                            title="Dr Anila Sharma, Radiologist"
                          >
                            <img
                              
                              width="84"
                              class="rounded-circle"
                              alt="Radiologist in Chandigarh"
                              src={slot.gender!="Male"?"https://cdn.askapollo.com/live/images/doctors/defaultprofilepicbig.jpg":
                                "https://cdn.askapollo.com/live/images/doctors/defaultprofilepicmale.png"
                              }
                              id="doctorlist_img_2415513"
                            />
                          </a>
                        </figure>
                      </div>
                      <div
                        
                        class="d-lg-flex d-xs-flex d-sm-flex pb-4 pb-lg-0 equal-columns"
                      >
                        <div
                          
                          class="dr-dscpn pt-4 pb-3 px-2 px-lg-4 px-xl-4 pb-lg-4 p-xxl-4 p-sm-4 p-xl-3"
                          // style={{
                          //   borderRight: "1px solid #dee2e6"
                          // }}
                        >
                          <h3
                            
                            class="cursor-pointer"
                          >
                            {slot.name}
                          </h3>
                          <div  class="spec-group">
                            <p >
                              {" "}
                              {slot.specialities}
                              <span  class="mx-2">
                                |
                              </span>{" "}
                              {slot.experience} yrs
                            </p>
                          </div>
                          <hr />
                         
                          <div
                            
                            class="language d-flex align-items-center pb-3"
                          >
                            <img
                              
                              src="https://www.askapollo.com/assets/images/language.svg"
                              alt=""
                              width="16"
                              class="me-1"
                            />
                            <span >English</span>
                          </div>
                          <div
                            
                            class="language d-flex align-items-center"
                          >
                            <img
                              
                              src="https://www.askapollo.com/assets/images/qualification.svg"
                              alt=""
                              width="16"
                              class="me-1"
                            />
                            <span
                              
                              class="data_info"
                            >
                              {slot.qualification}
                            </span>
                          </div>
                        </div>
                       
                        <div   
                          class="next-available d-flex flex-column justify-content-center text-center px-3 px-md-3 p-lg-4"
                        >
                          <p  class="mb-2">
                            <strong
                              
                              class="d-lg-block ms-2 ms-lg-0"
                            >
                              <span >
                                <span
                                  
                                  aria-hidden="true"
                                  class="icon-clock pull-left"
                                ></span>
                                <div
                                  
                                  class="mLeft20"
                                >
                                  {" "}
                                  {slot.seat}{" "}
                                 
                                </div>
                              </span>
                            </strong>
                          </p>
                          <a
                              onClick={() => {
                                book(slot._id);
                              }}
                            href="javascript:void(0)"
                            id="book_appointment_search_bookappointment"
                            class="btn btn-primary text-uppercase"
                          >
                            book appointment
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{slot.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Book Appointment</a>
  </div>
</div> */}
                  </div>

                 
              
                ))}
              </div>
              
            </div>
          )}
        </>
      )}
      <Footer/>
    </>
  );
}

export default Main;
