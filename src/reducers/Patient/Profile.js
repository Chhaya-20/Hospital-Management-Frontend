import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});









const EditProfile = createAsyncThunk(
  "edit",
  async (data, { rejectWithValue }) => {
    try {
      const { fieldName, value } = data;
      const response = await fetch(`https://hospital-management-backend-2c62.onrender.com/api/patient/editprofile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("patient")}`,
        },
        body: JSON.stringify({ [fieldName]: value }) // Send an object with fieldName and value
      });

      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.message);
      }

      const responseData = await response.json();
      return responseData; // Return the actual data if successful
    } catch (error) {
      // Handle any other errors and reject with a meaningful value
      return rejectWithValue(error.message);
    }
  }
);

const DoctorSlice = createSlice({
  name: "Doctor",
  initialState: {
    data: null,
    status: null,
    error: null,
  },
  reducers: {
    // Add your reducers here if needed
  },

  extraReducers: (builder) => {
   

    
    



    

    builder.addCase(EditProfile.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(EditProfile.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(EditProfile.rejected, (state, action) => {
     
      state.status = STATUSES.ERROR;
      state.error = action.payload; // Use the error message from payload
    });
  },
});

export const { todoAdded } = DoctorSlice.actions;
export { EditProfile }; // Export AddSlots async thunk

export default DoctorSlice.reducer;
