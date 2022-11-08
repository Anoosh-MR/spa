import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:5000/api/user/";

// register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    Cookies.set("otp", response.data.userId);
  }
  return response.data;
};

// login

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
