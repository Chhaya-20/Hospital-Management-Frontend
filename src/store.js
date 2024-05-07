import { configureStore } from "@reduxjs/toolkit";
import DoctorReducer from "./reducers/Doctor/DoctorAuth";
// import PatientReducer from "./reducers/Patient/PatientAuth";
import AllSlot from "./reducers/Doctor/AllSlot";
// import AllSlotsreducer from "./reducers/Patient/Slots";
import Slot from "./reducers/Doctor/Slot";

export const store = configureStore({
  reducer: {
    Doctor: DoctorReducer,
    // Patient: PatientReducer,
    AllSlot: AllSlot,
    // Pslot: AllSlotsreducer,
    Slot: Slot,
  },
});
