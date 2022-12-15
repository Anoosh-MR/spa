import styled from "styled-components";
import { Box } from "@mui/system";

var familyMan = `'Manrope', sans-serif`;

export const HomeContainer = styled(Box)`
  height: 100vh;
  overflow: auto;
`;
export const HeaderBox = styled(Box)`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  margin: 20px 60px 0px 60px;
`;
export const HeadingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Heading = styled.h1`
  font-family: ${familyMan};
  font-weight: 700;
`;
export const Paragraph = styled.p`
  font-family: ${familyMan};
  font-size: 0.9em;
  font-weight: 500px;
`;

export const ImagesContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const NothingBanner = styled.img`
  width: 613px;
  height: 338px;
  margin-bottom: 70px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
  gap: 10px;
`;
