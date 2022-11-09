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
import { ImageList, ImageListItem } from "@mui/material";

const Home = () => {
  const [files, setfiles] = useState();
  const [fetchagain, setFetchagain] = useState(false);
  console.log(files);
  const { user } = useSelector((state) => state.user);
  const title = user._id;
  const PF = "http://localhost:5000/";

  const navigate = useNavigate();

  const fetchPicture = () => {
    getMultipleFiles(title).then((res) => {
      setfiles(res);
    });
  };

  useEffect(() => {
    if (!user) navigate("/register");
    fetchPicture();
  }, [navigate, fetchagain]);

  return (
    <HomeContainer>
      <HeaderBox>
        <HeadingContainer>
          <Heading variant="h3">Media Library</Heading>
          <Paragraph variant="p">0 images</Paragraph>
        </HeadingContainer>

        <UploadModel setFetchagain={setFetchagain} />
      </HeaderBox>
      {files ? (
        <ImageList
          sx={{ width: 500, height: 450, margin: "50px" }}
          cols={3}
          rowHeight={164}
        >
          {files.map((item, id) => (
            <ImageListItem key={id}>
              <img src={PF + item.path} alt={PF + item.path} loading="lazy" />
            </ImageListItem>
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
