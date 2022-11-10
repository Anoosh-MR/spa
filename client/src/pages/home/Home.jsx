import React, { useEffect, useState } from "react";

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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMultipleFiles } from "../../../api/api";
import { ImageList } from "@mui/material";
import { Box } from "@mui/system";
import ImageView from "../../components/imageView/ImageView";

const Home = () => {
  const [files, setfiles] = useState();

  console.log(files);
  const { user } = useSelector((state) => state.user);
  const title = user._id;

  const navigate = useNavigate();

  const fetchPicture = () => {
    getMultipleFiles(title).then((res) => {
      setfiles(res);
    });
  };

  useEffect(() => {
    if (!user) navigate("/register");
    fetchPicture();
  }, [navigate]);

  return (
    <HomeContainer>
      <HeaderBox>
        <HeadingContainer>
          <Heading variant="h3">Media Library</Heading>
          <Paragraph variant="p">0 images</Paragraph>
        </HeadingContainer>

        <UploadModel fetchPicture={fetchPicture} />
      </HeaderBox>
      {files?.length > 0 ? (
        <ImageList
          variant="standard"
          sx={{
            width: 1250,
            height: 450,
            padding: "50px",
          }}
          rows={4}
          cols={4}
          rowHeight={200}
        >
          {files.map((element, index) => (
            <Box key={element._id}>
              {element.files.map((file, index) => (
                <ImageView key={file.filePath} file={file} />
              ))}
            </Box>
          ))}
        </ImageList>
      ) : (
        <ImagesContainer>
          <NothingBanner src={image} />
          <Paragraph>Click on ‘Upload’ to start adding images</Paragraph>
        </ImagesContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
