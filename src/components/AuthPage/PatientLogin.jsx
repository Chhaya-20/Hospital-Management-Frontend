import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getuser } from "../../reducers/Patient/PatientAuth";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import "../Styles/Login.css";

function PatientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.Patient.status);

  useEffect(() => {
    
    if (loginStatus === "idle") {
     

      navigate("/patientpage");
      
    } else if (loginStatus === "error") {
      alert("Login failed");
    }
  }, [loginStatus]);

  const login = async (e) => {
    e.preventDefault();

    try {
      dispatch(getuser({ email, password }));
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container main" style={{ width: "30%" }}>
        <div className="forms ">
          <h2>Login As Patient</h2>
          <hr/>
          <form className="">
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              onClick={login}
              type="submit"
              className="btn btn-primary mb-3"
            >
              Login
            </button>
            <p>
              Don't have an account? <a href="/signup">Signup</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default PatientLogin;
