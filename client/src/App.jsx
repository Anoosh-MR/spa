import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/login/Login";
import SignUp from "./pages/Auth/signup/SignUp";
import Home from "./pages/home/Home";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
