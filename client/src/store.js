import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Redux/AuthSlice";
import fileSlice from "./Redux/fileSlice";

export default configureStore({
  reducer: {
    user: AuthSlice,
    file: fileSlice,
  },
});
