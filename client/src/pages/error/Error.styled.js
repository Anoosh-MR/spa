import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const TopError = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;
export const Box404 = styled(Box)`
  display: flex;
  align-items: center;
  gap: 25px;
`;
export const Text = styled(Typography)`
  font-size: 350px;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
`;
export const Image = styled.img``;
export const Paragraph = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 24px;
  font-weight: 500;
`;

export const BackToHome = styled(Button)`
  margin-top: 40px;
  text-transform: none;
  font-size: 14px;
  height: 40px;
`;

export const Icon = styled(ArrowBackIcon)`
  border: 1px solid #ffff;
  border-radius: 50%;
  font-family: "Manrope", sans-serif;
  margin-right: 10px;
`;
