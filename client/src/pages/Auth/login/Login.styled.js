import styled from "@emotion/styled";
import { Box } from "@mui/system";
import "react-phone-input-2/lib/style.css";
import { Grid, Link, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

var family = `'Inter', sans-serif;`;
var familyMan = `'Manrope', sans-serif`;

export const MainContainer = styled(Box)`
  display: flex;
  height: 100vh;
`;

export const FormBox = styled(Box)`
  flex: 5;
  display: flex;
  align-items: center;
`;

export const GridContainer2 = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 80px;
  height: 100%;
  margin-top: 13rem;
`;

export const FormHeading = styled(Typography)`
  font-family: ${family};
  font-size: 2.3em;
  font-weight: 700;
`;
export const SubHeading = styled(Typography)`
  font-family: ${family};
  margin-top: 7px;
  font-weight: 200;
  font-size: 0.9em;
  color: #000000;
`;

export const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputItems = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Fields = styled(TextField)`
  width: 300px;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  font-family: ${familyMan};
  font-size: 0.8em;
  font-weight: 600;
`;
export const LINKS = styled(Link)`
  font-family: ${familyMan};
  text-decoration: none;
`;
export const Button = styled(LoadingButton)`
  width: 300px;
  height: 40px;
  margin: 15px 0 10px;
  text-transform: none;
  font-family: ${familyMan};
  font-weight: 600;
`;

export const Phone = styled(PhoneInput)`
  width: 300px;
  height: 40px;
  margin: 30px 0 10px;
  text-transform: none;
`;
