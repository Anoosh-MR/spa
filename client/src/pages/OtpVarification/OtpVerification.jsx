import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import OtpInput from "react-otp-input";

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

const inputstyle = {
  backgroundColor: "white",
};

const OtpVerification = () => {
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
          <TextField type="number" size="small" />
        </Box>
        <Box sx={{ gap: "10px", display: "flex" }}>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            Resend
          </Button>
          <Button sx={{ textTransform: "none" }} variant="contained">
            Vaify
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default OtpVerification;
