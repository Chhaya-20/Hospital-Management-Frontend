import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const AddSlots = createAsyncThunk(
  "addslot",
  async (data, { rejectWithValue }) => {
    try {
      const { start, end } = data;
      const response = await fetch("https://hospital-management-backend-2c62.onrender.com/api/doctor/addslot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("doctor")}`,
        },
        body: JSON.stringify({ startTime: start, endTime: end }),
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



const BookSlot =  createAsyncThunk(
  "bookslot",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("https://hospital-management-backend-2c62.onrender.com/api/doctor/viewbooked", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("doctor")}`,
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



const DeleteSlot = createAsyncThunk(
  "deleteslot",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://hospital-management-backend-2c62.onrender.com/api/doctor/delete/${data}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("doctor")}`,
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




const EditSlot = createAsyncThunk(
  "editslot",
  async (data, { rejectWithValue }) => {
    try {
      const {id,startTime,endTime}=data;
      //console.log(data)
      const response = await fetch(`https://hospital-management-backend-2c62.onrender.com/api/doctor/editslot/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("doctor")}`,
        },
        body:JSON.stringify({startTime , endTime})
        
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
    builder.addCase(AddSlots.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(AddSlots.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(AddSlots.rejected, (state, action) => {
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

    builder.addCase(EditSlot.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(EditSlot.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(EditSlot.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload; // Use the error message from payload
    });
  },
});

export const { todoAdded } = DoctorSlice.actions;
export { AddSlots,BookSlot,DeleteSlot,EditSlot }; // Export AddSlots async thunk

export default DoctorSlice.reducer;
