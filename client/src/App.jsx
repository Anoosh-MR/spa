import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/login/Login";
import SignUp from "./pages/Auth/signup/SignUp";
import Home from "./pages/home/Home";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import Error404 from "./pages/error/Error404";
import OtpVerification from "./pages/OtpVarification/OtpVerification";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/register/otp" element={<OtpVerification />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
