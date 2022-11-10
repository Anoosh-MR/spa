import { ImageListItemBar } from "@mui/material";
import styled from "styled-components";

var familyMan = `'Manrope', sans-serif`;

export const Images = styled.img`
  height: 100%;
  width: 100%;
  vertical-align: middle;
  object-fit: cover;
  border-radius: 10px;
  font-family: ${familyMan};
`;

export const ImageListItemsTop = styled(ImageListItemBar)`
  font-family: ${familyMan};
  font-size: 10px;
  border-radius: 10px;

  .chip {
    font-family: ${familyMan};
    font-size: 10px;
    margin: 5px;
  }
`;
