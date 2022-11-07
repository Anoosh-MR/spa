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
import React from "react";
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

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <MainContainer maxWidth="xxl">
      {/* Banner component */}
      <Banner />
      <FormBox>
        <GridContainer2>
          <FormHeading variant="h1">Welcome back!</FormHeading>
          <SubHeading variant="p">Please Enter your details.</SubHeading>
          <Box component="form" noValidate sx={{ mt: 4 }}>
            <InputBox>
              <InputItems>
                <InputLabel htmlFor="firstname">Email Address*</InputLabel>
                <Fields required type="email" id="firstname" size="small" />
              </InputItems>
              <InputItems>
                <InputLabel htmlFor="firstname">Password*</InputLabel>

                <OutlinedInput
                  required
                  size="small"
                  autoComplete="email"
                  autoFocus
                  id="firstname"
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
          <Button variant="contained">Sign Up</Button>
        </GridContainer2>
      </FormBox>
    </MainContainer>
  );
};

export default Login;
