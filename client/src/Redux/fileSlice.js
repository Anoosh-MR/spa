import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./AuthService";

const initialState = {
  Selectedfiles: [],
  message: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const SaveFile = createAsyncThunk("/", async (data, thunkAPI) => {
  try {
    return await authService.SaveFile(data);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const fileSlice = createSlice({
  name: "file",
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
      .addCase(SaveFile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SaveFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(SaveFile.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true);
        state.message = action.payload;
      });
  },
});
export const { reset } = fileSlice.actions;
export default fileSlice.reducer;
