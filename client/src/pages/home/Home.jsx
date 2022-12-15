import React, { useEffect, useState } from "react";

import {
  ButtonContainer,
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
import DeleteIcon from "@mui/icons-material/Delete";
import ImageView from "../../components/imageView/ImageView";
import { UploadBtn } from "../../components/uploadModal/UploadModel.styled";

const Home = () => {
  const [files, setfiles] = useState();

  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const fetchPicture = () => {
    getMultipleFiles(user._id).then((res) => {
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
        <ButtonContainer>
          <UploadModel fetchPicture={fetchPicture} />
          <UploadBtn
            variant="outlined"
            sx={{ textTransform: "none", fontWeight: "700" }}
            startIcon={<DeleteIcon sx={{ marginRight: "10px" }} />}
          >
            Delete Selected
          </UploadBtn>
        </ButtonContainer>
      </HeaderBox>
      {files?.length > 0 ? (
        <ImageList
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
          }}
          rowHeight={200}
        >
          {files.map((element, index) =>
            element.files.map((file, index) => (
              <ImageView key={file.filePath} file={file} />
            ))
          )}
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
