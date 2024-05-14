
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Login from "./components/AuthPage/PatientLogin";
import Main from "./components/Main";
import SignUp from "./components/AuthPage/PatinetSignUp";

import "./App.css";
import DoctorLogin from "./components/AuthPage/DoctorLogin";
import DoctorSignUp from "./components/AuthPage/DoctorSignUp";
import PatientPage from "./components/pages/Patient/PatientPage";
import DoctorPage from "./components/pages/Doctor/DoctorPage";

import AddSlot from "./components/pages/Doctor/AddSlot";

import BookedSlot from "./components/pages/Doctor/BookedSlot";
import Profile from "./components/pages/Doctor/Profile";
// import AllSlots from "./components/pages/Patient/AllSlots";
import BookSlot from "./components/pages/Patient/BookSlot";
import Profile1 from "./components/pages/Patient/Profile1";
import SlotPage from "./components/pages/Doctor/SlotPage";
import Slot from "./reducers/Doctor/Slot";
import Appointments from "./components/pages/Doctor/Appointments";
import Details from "./components/pages/Patient/Details";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />\
          <Route path="/doctorlogin" element={<DoctorLogin />} />
          <Route path="/doctorsignup" element={<DoctorSignUp />} />
          <Route path="/doctorpage" element={<DoctorPage />} />
          <Route path="/addslot" element={<AddSlot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookslots" element={<BookedSlot />} />
          {/* PATINET ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/patientpage" element={<PatientPage />} />
          <Route path="/allslots" element={<PatientPage />} />
          <Route path="/patientslot" element={<BookSlot />} />
          <Route path="/patientprofile" element={<Profile1 />} />
          <Route path="/details" element={<Details/>}/>



          {/* <Route path="/create" element={<CreateTodoPage />} /> */}
          {/* <Route path="/update/:id" element={<UpdateTodoPage />} /> */}




          <Route path="/slots" element={<SlotPage/>}/>
          <Route path='/appointments' element={<Appointments/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
