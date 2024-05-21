import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../reducers/Patient/PatientAuth";
import Navbar from "../Navbar";
import "../Styles/Login.css";
import { toast } from "react-toastify";

function PatientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loginStatus = useSelector((state) => state.Patient.status);


  

  const login = async (e) => {
    e.preventDefault();
    toast("Please Wait! It may take some time");
    setLoading(true);

    try {
      dispatch(getuser({ email, password }))
        .then((res) => {
          setLoading(false);
          if (res.type === "getuser/fulfilled") {
           const state = location.state.from;
            navigate(state);
            toast("Successfully Logged In!");
          } else {
            setLoading(false);
            toast.error("An error occurred while logging in.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
          toast("An error occurred while logging in.");
        });
    } catch (error) {
      setLoading(false);
      toast("An error occurred while logging in.");
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
            alt="Loading"
          />
        </div>
      ) : (
        <div className="container main my-5" style={{ width: "30%" }}>
          <div className="forms">
            <h2>Login As Patient</h2>
            <hr />
            <form>
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
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PatientLogin;
