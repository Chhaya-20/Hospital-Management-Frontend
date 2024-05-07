import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const getuser = createAsyncThunk(
  "getuser",
  async (data, { rejectWithValue }) => {
    try {
     
      const { email, password } = data;
     

      const response = await fetch("https://hospital-backend-3.onrender.com/api/doctor/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error("Login Failed");
      }

      const responseData = await response.json();
      localStorage.setItem("doctor", responseData.token);
     
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createuser = createAsyncThunk(
  "createuser",
  async (data, { rejectWithValue }) => {
    try {
       console.log(data)
      const { name, email, password ,experience , specialities , qualification,gender,locality,seat} = data;
     
     

      const response = await fetch("https://hospital-backend-3.onrender.com/api/doctor/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password ,experience , specialities , qualification ,gender,locality,seat}),
      });
     console.log(response)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseData = await response.json();
      console.log(responseData);
      localStorage.setItem("doctor", responseData.token);

      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const getdoctor = createAsyncThunk(
  "getdoctor",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("https://hospital-backend-3.onrender.com/api/doctor/getbyId", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("id")}`,

        }
      });
    
      if (!response.ok) {
        throw new Error("Login Failed");
      }

      const responseData = await response.json();
      localStorage.setItem("doctor", responseData.token);
     
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const DoctorSlice = createSlice({
  name: "User",
  initialState: {
    data: null,
    status: null,
    error: null,
  },
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getuser.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getuser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(getuser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
    builder.addCase(createuser.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(createuser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(createuser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload;
    });



    builder.addCase(getdoctor.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getdoctor.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(getdoctor.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.payload;
    });
  },
});

export const { todoAdded } = DoctorSlice.actions;
export { getuser }; // Export getuser async thunk

export default DoctorSlice.reducer;
