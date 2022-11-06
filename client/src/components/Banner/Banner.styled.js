import styled from "@emotion/styled";
import { Box } from "@mui/system";
import bgImage from "../../assets/images/Rectangle.jpg";
import "react-phone-input-2/lib/style.css";
import { Grid } from "@mui/material";
var family = `"Manrope", sans-serif`;

export const BannerBox = styled(Box)`
  height: 100%;
  flex: 2;
  display: flex;
  background-image: url(${bgImage});
  background-size: contain;
`;
export const GridContainer1 = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin: 50px;
  .BannerHeading {
    font-weight: 700;
  }
  .subHeading {
    margin-right: 40px;
  }
`;

export const BannerContent = styled(Box)`
  font-family: ${family};
  color: #ffff;
`;
