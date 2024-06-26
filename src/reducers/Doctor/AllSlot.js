import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const getSlot = createAsyncThunk(
  "allslot",
  async (_, { rejectWithValue }) => {
    console.log(localStorage.getItem("id"));
    try {
      const response = await fetch("https://hospital-backend-3.onrender.com/api/doctor/viewslot", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("doctor")}`,
        },
      });
      console.log(response);
      if (!response.ok) {
        // If the response is not OK (HTTP status not in the 200s)
        throw new Error("Failed to fetch slots");
      }

      const responseData = await response.json();
      return responseData; // Return the actual data if successful
    } catch (error) {
      // Handle any other errors and reject with a meaningful value
      return rejectWithValue(error.message);
    }
  }
);




const  getSlot1 = createAsyncThunk(
  "slots",
  async (_, { rejectWithValue }) => {
    console.log(localStorage.getItem("id"));
    try {
      const response = await fetch("https://hospital-backend-3.onrender.com/api/doctor/viewslot1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("id")}`,
        },
      });
      console.log(response);
      if (!response.ok) {
        // If the response is not OK (HTTP status not in the 200s)
        throw new Error("Failed to fetch slots");
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
    builder.addCase(getSlot.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(getSlot.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(getSlot.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload; // Use the error message from payload
    });


    builder.addCase(getSlot1.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(getSlot1.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(getSlot1.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload; // Use the error message from payload
    });
  },
});



export const { todoAdded } = DoctorSlice.actions;
export { getSlot , getSlot1 }; // Export getSlot async thunk

export default DoctorSlice.reducer;
