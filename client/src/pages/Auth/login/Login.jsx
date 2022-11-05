import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import React from "react";
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
  Phone,
  SubHeading,
} from "./Login.styled";

const Login = () => {
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
                <Fields id="firstname" size="small" />
              </InputItems>
              <InputItems>
                <InputLabel htmlFor="firstname">Password*</InputLabel>
                <Fields id="firstname" size="small" />
              </InputItems>
            </InputBox>

            <Grid item xs display="flex" alignItems="center">
              <FormControlLabel
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
