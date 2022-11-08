import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./AuthService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  token: user ? user.token : null,
  message: "",
  isError: false,
  isSuccess: false,
  isSuccessRegister: false,
  isLoading: false,
};

// register

export const register = createAsyncThunk(
  "/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//login user

export const login = createAsyncThunk("/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// otpverification

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isSuccessRegister = false;
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
        state.isSuccessRegister = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true);
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});
export const { reset } = AuthSlice.actions;
export default AuthSlice.reducer;
