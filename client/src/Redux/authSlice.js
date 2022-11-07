import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

const signUpUser = createAsyncThunk("signupuser", () => {});

export const AuthSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default AuthSlice.reducer;
