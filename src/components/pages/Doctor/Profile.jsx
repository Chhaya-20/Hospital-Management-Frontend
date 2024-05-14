import React, { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { EditProfile } from '../../../reducers/Doctor/Profile';
import { toast } from 'react-toastify';
function Profile() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialities: '',
    experience: '',
    qualification: ''
  });

  useEffect(() => {
    if (!localStorage.getItem('doctor')) {
      navigate('/doctorlogin');
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUpdate = (fieldName, e) => {
    e.preventDefault();
    
    // Dispatch an action to update the profile with the new data
    dispatch(EditProfile({ fieldName, value: formData[fieldName] }))
    .then(()=>{
        toast("Successfully Updated")
        const updatedFormData = { ...formData, [fieldName]: "" };
        setFormData(updatedFormData); 


    }).catch((err)=>{
        toast.error("Some Error Occured")

    })
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 mt-5">
          <div
            className="container mt-5"
            style={{
              width: '50%',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
          >
            <div className="forms">
              <h2>Manage Profile</h2>
              <hr />
              <form className="mt-3" method="POST">
                <div className="mb-3 d-flex">
                  <input
                    placeholder="Name"
                    name="name"
                    type="text"
                    className="form-control d-inline"
                    id="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-primary ms-3"
                    onClick={(e) => handleUpdate('name', e)}
                  >
                    Update
                  </button>
                </div>
                <div className="mb-3 d-flex">
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-primary ms-3"
                    onClick={(e) => handleUpdate('email', e)}
                  >
                    Update
                  </button>
                </div>
                <div className="mb-3 d-flex">
                  <input
                    placeholder="New Password"
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={formData.password}
                    onChange={handleChange}
                    // required
                  />
                  <button
                    className="btn btn-primary ms-3"
                    onClick={(e) => handleUpdate('password', e)}
                  >
                    Update
                  </button>
                </div>
                <div className="mb-3 d-flex">
                  <input
                    placeholder="Specialities"
                    name="specialities"
                    type="text"
                    className="form-control"
                    id="specialities"
                    value={formData.specialities}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-primary ms-3"
                    onClick={(e) => handleUpdate('specialities', e)}
                  >
                    Update
                  </button>
                </div>
                <div className="mb-3 d-flex">
                  <input
                    placeholder="Experience"
                    name="experience"
                    type="text"
                    className="form-control"
                    id="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-primary ms-3"
                    onClick={(e) => handleUpdate('experience', e)}
                  >
                    Update
                  </button>
                </div>
                <div className="mb-3 d-flex">
                  <input
                    placeholder="Qualification"
                    name="qualification"
                    type="text"
                    className="form-control"
                    id="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-primary ms-3"
                    onClick={(e) => handleUpdate('qualification', e)}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
