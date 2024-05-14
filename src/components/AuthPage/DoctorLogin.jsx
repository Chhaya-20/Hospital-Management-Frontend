import React, { useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import { getuser } from "../../reducers/Doctor/DoctorAuth";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import "../Styles/Login.css";
import { toast } from "react-toastify";
function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.Doctor.status);

  // useEffect(() => {
    
  //   if (loginStatus === "idle") {
  //     navigate("/doctorpage");
      
  //   } else if (loginStatus === "error") {
  //     toast("Login failed");
  //   }
  // }, [loginStatus]);

  const login = async (e) => {
    e.preventDefault();

    toast("Please Wait ! It may take some time ");
    setLoading(true);

    try {
      // Dispatch the action to get the user
      dispatch(getuser({ email, password }))
        .then((res) => {
        
          console.log("Response:", res);
          if(res.type=="getuser/fulfilled")
          {
            console.log("here")
            navigate("/doctorpage")
          }
          else{
            setLoading(false)
            toast.error("An error occurred while logging in.");
          }
        })
        .catch((error) => {
        
          console.error("Error:", error);
          setLoading(false);
          toast.error("An error occurred while logging in.");
        });
    } catch (error) {
   
      console.error("Error:", error);
      setLoading(false);
      toast.error("An error occurred while logging in.");
    }
    
  };
  return (
    <>
      <Navbar />

      {loading ? (
        <div
          style={{
            height: "90vh",
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
          {/* <p>Loading....</p> */}
        </div>
      ) : (
        <div className="container main my-5 ">
          <div className="forms ">
            <h2>Login As Doctor</h2>
            <hr />
            <form >
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
                Don't have an account ? <button
                  style={{ "background": "none",
                  "border": "none",
                  "outline": "none",
                  "boxShadow": "none",
                  "color":"blue",
                  "fontWeight":"bold"
                  }}
                  onClick={()=>{navigate("/doctorsignup")}} 



                
                
                
                
                ><Link to="/doctorsignup">Signup</Link></button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorLogin;
