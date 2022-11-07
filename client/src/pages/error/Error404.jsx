import { Box } from "@mui/material";
import { textAlign } from "@mui/system";
import React from "react";
import rectangle43 from "../../assets/images/Rectangle 43.jpg";

import {
  BackToHome,
  Box404,
  Icon,
  Image,
  Paragraph,
  Text,
  TopError,
} from "./Error.styled";

const Error404 = () => {
  return (
    <TopError>
      <Box404>
        <Text variant="h1">4</Text>
        <Image src={rectangle43} alt="error" />
        <Text variant="h1">4</Text>
      </Box404>

      <Box sx={{ display: "flex", textAlign: "center" }}>
        <Paragraph>
          oops! looks like you are lost.
          <br /> The page you are looking for could not be found.
        </Paragraph>
      </Box>
      <BackToHome href="/" variant="contained" startIcon={<Icon />}>
        Back to home
      </BackToHome>
    </TopError>
  );
};

export default Error404;
