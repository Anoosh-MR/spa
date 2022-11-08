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
    AddtoFiles: (state, action) => {
      console.log(action.payload.filesSelected);
      const itemInSelectedFiles = state.Selectedfiles.find(
        (item) => item === action.payload.filesSelected
      );

      if (itemInSelectedFiles) {
        state.Selectedfiles.push({
          ...itemInSelectedFiles,
          ...action.payload.filesSelected,
        });
      } else {
        state.Selectedfiles.push({ ...action.payload });
      }
    },
    removeFiles: (state, action) => {
      const item = state.cart.find((item) => item.name === action.payload);
      state.Selectedfiles.filter((val) => {
        val === action.payload;
      });
    },
  },
});
export const { AddtoFiles, removeFiles } = fileSlice.actions;
export default fileSlice.reducer;
