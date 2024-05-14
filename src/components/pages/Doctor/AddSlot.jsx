import React, { useState,useEffect } from 'react'
import { useDispatch } from "react-redux";
import { AddSlots } from '../../../reducers/Doctor/Slot'
import Sidebar from './Sidebar';
import './style.css'
import Navbar from './Navbar';
import { toast } from 'react-toastify';

function AddSlot() {
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!localStorage.getItem('doctor')) {
      navigate('/doctorlogin');
    }
  })


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


  const addslots = (e) => {
    e.preventDefault();
  setLoading(true)
    dispatch(AddSlots({start, end}))
    .then((response)=>{
      setLoading(false)
      if(response.payload.success==true){
        console.log(response.payload.message);
        toast(response.payload.message)
        setend("");
        setstart("")
      }
      else{
        console.log(response.payload);
        toast(response.payload)
      }
   
    

    }).catch((error)=>{
      setLoading(false)

      console.log(error);

    })

  }

  return (
    <>
      <div className='row'>
      {showNavbar && <Navbar />}
        <div className={`col-xxl-2 col-xl-2 col-lg-2 col-md-3  ${showNavbar ? 'col-0' : ''}`}>
        {sidebar && <Sidebar />}
        </div>
        
        <div className={`col-xxl-10 col-xl-10 mt-5 col-lg-10 col-md-9 ${showNavbar ? 'col-12' : ''}`}>


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
          {/* <p>Loading....</p> */}
        </div>
      ):(<div className="container mainss mt-5">
      <div className="forms">
        <h2>Add slot</h2>
        <p style={{"fontWeight": "normal"}}>(Enter both in (YYYY-MM-DD HH:MM:SS) format...)</p>
        <hr/>
        <form className='mt-5'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Enter start time</label>
            <input
              value={start}
              onChange={(e) => setstart(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Enter end time</label>
            <input
              value={end}
              onChange={(e) => setend(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button onClick={(e) => addslots(e)} type="submit" className="btn btn-primary mb-3">Add slot</button>
        </form>
      </div>
    </div>)}
      
          








        </div>
      </div>
    </>
  )
}

export default AddSlot;
