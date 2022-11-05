import { Box, Checkbox } from "@mui/material";
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
} from "./SignUp.styled";

const SignUp = () => {
  return (
    <MainContainer maxWidth="xxl">
      {/* Banner component */}
      <Banner />
      <FormBox>
        <GridContainer2>
          <FormHeading variant="h1">Begin your journey!</FormHeading>
          <SubHeading variant="p">
            Get started with the best platform for design
          </SubHeading>
          <Box component="form" noValidate sx={{ mt: 4 }}>
            <InputBox>
              <InputItems>
                <InputLabel htmlFor="firstname">First Name*</InputLabel>
                <Fields color="primary" autoFocus id="firstname" size="small" />
              </InputItems>
              <InputItems>
                <InputLabel htmlFor="firstname">Last Name*</InputLabel>
                <Fields id="firstname" size="small" />
              </InputItems>
            </InputBox>
            <InputBox>
              <InputItems>
                <InputLabel htmlFor="firstname">Email Address*</InputLabel>
                <Fields id="firstname" size="small" />
              </InputItems>
              <InputItems>
                <InputLabel htmlFor="firstname">Phone Number*</InputLabel>
                <Phone
                  country={"us"}
                  containerStyle={{ bottom: "30px" }}
                  inputStyle={{ height: "40px" }}
                />
              </InputItems>
            </InputBox>
            <InputBox>
              <InputItems>
                <InputLabel htmlFor="firstname">Password*</InputLabel>
                <Fields id="firstname" size="small" />
              </InputItems>
            </InputBox>

            <Checkbox id="checkbox" />
            <InputLabel>
              By signing up, you agree to our<LINKS>User Agreement</LINKS> ,
              <LINKS>Terms of Service</LINKS>, & <LINKS>Privacy Policy</LINKS>
            </InputLabel>
          </Box>
          <Button variant="contained">Sign Up</Button>
          <InputLabel>
            Already have an account?<LINKS href="/login">Log In</LINKS>
          </InputLabel>
        </GridContainer2>
      </FormBox>
    </MainContainer>
  );
};

export default SignUp;
