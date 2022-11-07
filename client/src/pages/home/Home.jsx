import React from "react";
import {
  HeaderBox,
  Heading,
  HeadingContainer,
  HomeContainer,
  ImagesContainer,
  NothingBanner,
  Paragraph,
} from "./Home.styled";
import image from "../../assets/images/image 15.jpg";
import UploadModel from "../../components/uploadModal/UploadModel";

const Home = () => {
  return (
    <HomeContainer>
      <HeaderBox>
        <HeadingContainer>
          <Heading variant="h3">Media Library</Heading>
          <Paragraph variant="p">0 images</Paragraph>
        </HeadingContainer>

        <UploadModel />
      </HeaderBox>
      <ImagesContainer>
        <NothingBanner src={image} />
        <Paragraph>Click on ‘Upload’ to start adding images</Paragraph>
      </ImagesContainer>
    </HomeContainer>
  );
};

export default Home;
