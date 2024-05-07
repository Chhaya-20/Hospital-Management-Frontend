import React ,{useEffect,useState}from "react";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";
import '../../Styles/SlotPage.css'
import { useDispatch } from 'react-redux';
import { getdoctor } from '../../../reducers/Doctor/DoctorAuth';

function SlotPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);





    useEffect(() => {
      setLoading(true); 
      dispatch(getdoctor())
      .then((response)=>{
       console.log(response)
        setLoading(false);
        if (!response || response.length === 0) {
          setSlots([]);
        } else {
          setSlots(response.payload);
        }
         
  
  
      }).catch((err)=>{
          alert("Some Error Occured")
  
      })
    
    }, [])
    

  return (
    <>
    <Navbar/>
    <div className="rows mt-5 ">
      <div className="col-5 col-xs-4 d-flex justify-content-center align-items-center" style={{
        "width":"100vw",
        "height":"50vh"
      }}>
        <div
          _ngcontent-serverapp-c116=""
          class="shadow dr-thumbslist dr-list border-0"
          style={{
            // background:"#fdf9f2",
            background: "linear-gradient(0deg, #fff, #fff7e7)"
        }
          }
        >
          <div _ngcontent-serverapp-c116="" class="p-3">
            <div _ngcontent-serverapp-c116="" class="row">
              <div _ngcontent-serverapp-c116="" >
                <div
                  _ngcontent-serverapp-c116=""
                  class="abt-drs text-center"
                  title="Dr Anila Sharma, Radiologist"
                >
                  <img
                    _ngcontent-serverapp-c116=""
                    class="img-fluid mb-3"
                    src={slots.gender!="Male"?"https://cdn.askapollo.com/live/images/doctors/defaultprofilepicbig.jpg":
                                "https://cdn.askapollo.com/live/images/doctors/defaultprofilepicmale.png"
                              }
                    alt="Radiologist in Chandigarh"
                  />
                </div>
              </div>
              <div _ngcontent-serverapp-c116="">
                <h3 _ngcontent-serverapp-c116="">{slots.name} </h3>
                <hr/>
               
                <p _ngcontent-serverapp-c116="" class="mb-0">
                  {" "}
                  <strong>Work Experience : </strong>{slots.experience}
                </p>


                <p _ngcontent-serverapp-c116="" class="mb-0">
                  {" "}
                  <strong>Locality : </strong>{slots.locality}
                </p>
                <p _ngcontent-serverapp-c116="" class="mb-0">
                  {" "}
                  <strong>Qualification : </strong>{slots.qualification}
                </p>
                <p _ngcontent-serverapp-c116="" class="mb-0">
                  {" "}
                  <strong>Specialist : </strong>{slots.specialities}
                </p>













                
            
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={()=>{navigate("/appointments")}} className="btn btn-primary mt-5" >
        Book Appointment
      </button>
      
    </div>
    </>
    
  );
}

export default SlotPage;
