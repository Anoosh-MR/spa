import styled from "styled-components";
import { Box, CardMedia, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

var familyMan = `'Manrope', sans-serif`;
var detailColor = "#ebebeb";

export const Card = styled(CardMedia)`
  width: 100px;
  height: 80px;
  position: relative;
  z-index: 1;
  object-fit: contain;
  border-radius: 5px;
`;

export const Btn = styled(IconButton)`
  position: absolute;
  height: 5px;
  width: 5px;
  padding: 5px;
  z-index: 2;
  left: 70px;
  top: 25px;
`;
export const RemoveImg = styled(CloseIcon)`
  border: 1px solid grey;
  border-radius: 50%;
`;
export const DetailBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  background-color: ${detailColor};
  font-size: 13px;
  font-family: ${familyMan};
  border-radius: 5px;
`;
