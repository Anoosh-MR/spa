import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/login/Login";
import SignUp from "./pages/Auth/signup/SignUp";
import Home from "./pages/home/Home";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import Error404 from "./pages/error/Error404";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/error" element={<Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
