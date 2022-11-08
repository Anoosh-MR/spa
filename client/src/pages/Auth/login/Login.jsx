import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import Banner from "../../../components/Banner/Banner";
import {
  Button,
  Fields,
  FormBox,
  FormHeading,
  GridContainer2,
  InputBox,
  InputItems,
  InputLabel,
  LINKS,
  MainContainer,
  SubHeading,
} from "./Login.styled";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../../Redux/authSlice";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <MainContainer maxWidth="xxl">
      <Banner />
      <FormBox>
        <GridContainer2>
          <FormHeading variant="h1">Welcome back!</FormHeading>
          <SubHeading variant="p">Please Enter your details.</SubHeading>
          <Box component="form" noValidate sx={{ mt: 4 }}>
            <InputBox>
              <InputItems>
                <InputLabel htmlFor="email">Email Address*</InputLabel>
                <Fields
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  id="email"
                  size="small"
                />
              </InputItems>
              <InputItems>
                <InputLabel htmlFor="password">Password*</InputLabel>

                <OutlinedInput
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  size="small"
                  autoComplete="email"
                  autoFocus
                  id="password"
                  type={show ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShow(() => !show)}
                      >
                        {show ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </InputItems>
            </InputBox>

            <Grid item xs display="flex" alignItems="center">
              <FormControlLabel
                sx={{ "& .MuiFormControlLabel-label": { fontSize: "15px" } }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <LINKS
                href="forgotPass"
                variant="body2"
                sx={{ marginLeft: "25px" }}
              >
                Forgot password?
              </LINKS>
            </Grid>
          </Box>
          <LoadingButton
            loading={isLoading}
            onClick={onSubmit}
            variant="contained"
          >
            Sign Up
          </LoadingButton>
        </GridContainer2>
      </FormBox>
    </MainContainer>
  );
};

export default Login;
