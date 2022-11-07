import { Box, Checkbox } from "@mui/material";
import React, { useState } from "react";
import Banner from "../../../components/Banner/Banner";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../../Redux/authSlice";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Fields,
  FormBox,
  FormHeading,
  GridContainer2,
  InputBox,
  InputItems,
  Label,
  LINKS,
  MainContainer,
  NormalLabel,
  Phone,
  SubHeading,
} from "./SignUp.styled";
import { toast } from "react-toastify";

const SignUp = () => {
  const [phone, setPhoneNumber] = useState();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      ...phonenum,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmiit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password || !phone) {
      toast.warning("Please fill all the fields!");
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        password,
        phone,
      };
      dispatch(register(userData));
    }
  };

  return (
    <MainContainer maxWidth="xxl">
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
                <Label htmlFor="firstname">First Name*</Label>
                <Fields
                  onChange={onChange}
                  type="text"
                  name="firstname"
                  required
                  color="primary"
                  autoFocus
                  id="firstname"
                  size="small"
                />
              </InputItems>
              <InputItems>
                <Label htmlFor="lastname">Last Name*</Label>
                <Fields
                  onChange={onChange}
                  type="text"
                  required
                  id="lastname"
                  size="small"
                  name="lastname"
                />
              </InputItems>
            </InputBox>
            <InputBox>
              <InputItems>
                <Label htmlFor="email">Email Address*</Label>
                <Fields
                  onChange={onChange}
                  type="email"
                  required
                  id="email"
                  size="small"
                  name="email"
                />
              </InputItems>
              <InputItems>
                <NormalLabel htmlFor="phone">Phone Number*</NormalLabel>
                <Phone
                  onChange={(phone) => setPhoneNumber({ phone })}
                  name="phone"
                  id="phone"
                  country={"us"}
                  containerStyle={{ bottom: "30px" }}
                  inputStyle={{ height: "40px" }}
                />
              </InputItems>
            </InputBox>
            <InputBox>
              <InputItems>
                <Label htmlFor="password">Password*</Label>
                <Fields
                  onChange={onChange}
                  type="password"
                  required
                  id="password"
                  size="small"
                  name="password"
                />
              </InputItems>
            </InputBox>

            <Checkbox id="checkbox" />
            <Label>
              By signing up, you agree to our<LINKS>User Agreement</LINKS> ,
              <LINKS>Terms of Service</LINKS>, & <LINKS>Privacy Policy</LINKS>
            </Label>
          </Box>
          <Button variant="contained" onClick={handleSubmiit}>
            Sign Up
          </Button>
          <Label>
            Already have an account?<LINKS href="/login">Log In</LINKS>
          </Label>
        </GridContainer2>
      </FormBox>
    </MainContainer>
  );
};

export default SignUp;
