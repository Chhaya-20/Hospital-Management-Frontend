import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const getSlot = createAsyncThunk(
  "allslot",
  async (_, { rejectWithValue }) => {
    try {
    
      const response = await fetch("https://hospital-backend-3.onrender.com/api/patient/viewslots", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

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

const DeleteSlot = createAsyncThunk(
  "deleteslot",
  async (data, { rejectWithValue }) => {
   
    try {
      const response = await fetch(`https://hospital-backend-3.onrender.com/api/patient/cancel/${data}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("patient")}`,
        },
        
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

const BookSlot = createAsyncThunk(
  "bookslot",
  async (data, { rejectWithValue }) => {
    console.log(data)
    try {
      const response = await fetch(`https://hospital-backend-3.onrender.com/api/patient/book/${data}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("patient")}`,
        },
        
      });

      if (!response.ok) {
        
        const res = await response.json();
        console.log(res)
        throw new Error(res.message);
      }

      const responseData = await response.json();
      console.log(responseData);
      return responseData; // Return the actual data if successful
    } catch (error) {
      // Handle any other errors and reject with a meaningful value
      return rejectWithValue(error.message);
    }
  }
);

const ViewBookSlot = createAsyncThunk(
  "viewbookslot",
  async (_, { rejectWithValue }) => { // Destructure `rejectWithValue` from the second argument
    try {
      const response = await fetch(`https://hospital-backend-3.onrender.com/api/patient/bookslots`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("patient")}`,
        },
      });

      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.message);
      }

      const responseData = await response.json();
      console.log(responseData);
      return responseData; // Return the actual data if successful
    } catch (error) {
      // Handle any other errors and reject with a meaningful value
      return rejectWithValue(error.message);
    }
  }
);



const PatientSlice = createSlice({
  name: "Patient",
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
      state.error = null;
    });
    builder.addCase(getSlot.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null;
    });
    builder.addCase(getSlot.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload;
    });




    builder.addCase(DeleteSlot.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(DeleteSlot.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(DeleteSlot.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload; // Use the error message from payload
    });


    builder.addCase(BookSlot.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(BookSlot.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(BookSlot.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload; // Use the error message from payload
    });




    builder.addCase(ViewBookSlot.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(ViewBookSlot.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(ViewBookSlot.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload; // Use the error message from payload
    });
  },
});

export const { todoAdded } = PatientSlice.actions;
export { getSlot,DeleteSlot ,BookSlot,ViewBookSlot};

export default PatientSlice.reducer;
