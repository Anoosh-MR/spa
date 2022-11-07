import { Box, Button, Divider, Grid } from "@mui/material";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

var familyMan = `'Manrope', sans-serif`;
var primary = "#6360AB";

export const UploadBtn = styled(Button)`
  height: 40px;
  width: 200px;
`;
export const IconAdd = styled(AddIcon)`
  border: 2px solid #ffff;
  border-radius: 50%;
  margin-right: 5px;
`;
export const Heading = styled.h1`
  font-size: 15px;
  font-family: ${familyMan};
`;

export const CloseBtn = styled(CloseIcon)``;

export const Div = styled(Divider)`
  margin: 10px;
  width: 100%;
  padding-top: 15px;
`;

export const DropBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  font-family: ${familyMan};
  border-radius: 9px;
  margin-top: 30px;
  background-color: #fafafa;
  overflow: auto;
  height: 250px;
  border-radius: 5px;
  background-image: repeating-linear-gradient(
      -7deg,
      #333333,
      #333333 11.28px,
      transparent 12px,
      transparent 15.76px,
      #333333 16px
    ),
    repeating-linear-gradient(
      83deg,
      #333333,
      #333333 11.28px,
      transparent 12px,
      transparent 15.76px,
      #333333 16px
    ),
    repeating-linear-gradient(
      173deg,
      #333333,
      #333333 11.28px,
      transparent 12px,
      transparent 15.76px,
      #333333 16px
    ),
    repeating-linear-gradient(
      263deg,
      #333333,
      #333333 11.28px,
      transparent 12px,
      transparent 15.76px,
      #333333 16px
    );
  background-size: 1px calc(100% + 16.12px), calc(100% + 16.12px) 1px,
    1px calc(100% + 16.12px), calc(100% + 16.12px) 1px;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat;
  animation: borderAnimation 0.7s infinite linear;

  @keyframes borderAnimation {
    from {
      background-position: 0 0, -16.12px 0, 100% -16.12px, 0 100%;
    }
    to {
      background-position: 0 -16.12px, 0 0, 100% 0, -16.12px 100%;
    }
  }
`;
export const DropBox2 = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 3px;
  border-radius: 9px;
  padding: 5px;
  background-color: #fafafa;
  height: 250px;
  width: 600px;
  border-radius: 5px;
  overflow-y: auto;
  margin-bottom: 15px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: ${primary};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
