import { Box, Button, Modal } from "@mui/material";

import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Fileview from "../FileView/Fileview";
import CustomizedProgressBars from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

import {
  CloseBtn,
  Div,
  DropBox,
  DropBox2,
  FormField,
  Heading,
  IconAdd,
  UploadBtn,
} from "./UploadModel.styled";
import { multipleFilesUpload } from "../../../api/api";

const UploadModel = ({ fetchPicture }) => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const [isFilePicked, setIsFilePicked] = useState(false);
  const fileInputField = useRef(null);
  const [multipleProgress, setMultipleProgress] = useState(0);
  const [bar, setbar] = useState(false);
  const navigate = useNavigate();

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);

    setIsFilePicked(false);
  };

  const removeImage = (i) => {
    let valueToRemove = [files[i]];
    const numArray = files.filter(
      (element) => !valueToRemove.includes(element)
    );
    setFiles(numArray);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 613,
    height: 370,
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
    p: 2,
  };
  const FileHandler = (e) => {
    const filesSelected = Array.from(e.target.files);
    setFiles(filesSelected);
    setIsFilePicked(true);
    setMultipleProgress(0);
  };
  const FileHandler2 = (e) => {
    const filesSelected = Array.from(e.target.files);
    const Concated = files.concat(filesSelected);
    setFiles(Concated);
    setIsFilePicked(true);
  };

  const { user } = useSelector((state) => state.user);

  const token = user.token;

  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };

  const handleUpload = async () => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("title", user._id);
    setbar(true);
    await multipleFilesUpload(formData, mulitpleFileOptions);
    setbar(false);
    fetchPicture();
    handleClose();
  };

  return (
    <>
      <UploadBtn
        onClick={handleOpen}
        sx={{ textTransform: "none", fontWeight: "700" }}
        variant="contained"
        startIcon={<IconAdd />}
      >
        Upload new image
      </UploadBtn>
      <Modal open={open} sx={{ cursor: "pointer" }}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Heading>Upload new images</Heading>
            <CloseBtn onClick={handleClose} />
          </Box>
          <Div />
          {!isFilePicked ? (
            <DropBox>
              <p>Drop files here</p>
              <p>or</p>

              <Button
                sx={{ textTransform: "none", width: "100px" }}
                variant="outlined"
                component="label"
                onClick={handleUploadBtnClick}
              >
                Browse
              </Button>

              <FormField
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={FileHandler}
                ref={fileInputField}
              />
            </DropBox>
          ) : (
            <Box>
              <DropBox2>
                {files?.map((img, i) => (
                  <Fileview key={i} img={img} i={i} removeImage={removeImage} />
                ))}
              </DropBox2>
            </Box>
          )}
          {bar && (
            <CustomizedProgressBars multipleProgress={multipleProgress} />
          )}
          <Div />
          {isFilePicked && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <Button
                sx={{ height: "30px", width: "150px", textTransform: "none" }}
                variant="outlined"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={FileHandler2}
                />
                Add more
              </Button>
              <Button
                sx={{ height: "30px", width: "150px", textTransform: "none" }}
                variant="contained"
                onClick={handleUpload}
              >
                Upload
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default UploadModel;
