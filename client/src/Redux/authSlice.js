import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./AuthService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  token: user ? user.token : null,
  message: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

// register

export const register = createAsyncThunk(
  "/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true);
        state.message = action.payload;
        state.user = null;
      });
  },
});
export const { reset } = AuthSlice.actions;
export default AuthSlice.reducer;
