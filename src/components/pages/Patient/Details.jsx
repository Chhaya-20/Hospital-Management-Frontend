import React, { useState } from 'react'
import { Link , useLocation ,useNavigate} from 'react-router-dom';
import Navbar from '../../Navbar'
import { useDispatch } from "react-redux";
import '../../Styles/Login.css'

import { getSlot,BookSlot } from "../../../reducers/Patient/Slots";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Details() {
   
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setage]=useState("");
    const[loading,setLoading]=useState("")
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = async (e) => {
      e.preventDefault();
      try {
        const state = location.state.from;
        const id = location.state.id1;
    console.log(state,id);
        if (!state || !id) {
          console.error("Missing state or id in location state.");
          return;
        }
    
        setLoading(true);
        await dispatch(BookSlot(id));
    
        const response = await dispatch(getSlot());
        console.log(response);
    
        setLoading(false);
        toast("Your Slot is Successfully Booked!");
        navigate(state);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
        toast.error("An error occurred. Please try again.");
      }
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
      ):(  <div className="container main my-5" style={{ width: "30%" }}>
      <div className="forms ">
        <h2>Enter Details</h2>
        <hr/>
        <form className="">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              aria-describedby=""
            />
          </div>







          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>


          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              value={age}
              onChange={(e) => setage(e.target.value)}
              type="text"
              className="form-control"
              id="age"
            />
          </div>

          <button
            onClick={(e)=>{submit(e)}}
            type=""
            className="btn btn-primary mb-3"
          >
            Submit
          </button>
         
        </form>
      </div>
    </div>)}
     

    
   </>
  )
}

export default Details