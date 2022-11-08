import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const style = {
  width: 613,
  height: 370,
  bgcolor: "background.paper",
  boxShadow: 2,
  borderRadius: 2,
  p: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  backgroundColor: "#f3f3f3",
  flexDirection: "column",
};

const OtpVerification = () => {
  const [otp, setOtp] = useState();
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookies.get("otp");
    setUserId(cookie);
  });

  const handleSubmit = async () => {
    try {
      if (!otp || !userId) {
        toast.warning("please fill all the fields");
      } else {
        const data = await axios.post(
          "http://localhost:5000/api/user/varifyOtp/",
          {
            userId,
            otp,
          }
        );
        if (data) {
          toast.success("Registered success!Login");
          navigate("/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={style}>
        <Box>
          <TextField
            type="number"
            size="small"
            onChange={(e) => setOtp(e.target.value)}
          />
        </Box>
        <Box sx={{ gap: "10px", display: "flex" }}>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            Resend
          </Button>
          <LoadingButton
            sx={{ textTransform: "none" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Vaify
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};
export default OtpVerification;
