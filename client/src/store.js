import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Redux/AuthSlice";

export default configureStore({
  reducer: {
    user: AuthSlice,
  },
});
