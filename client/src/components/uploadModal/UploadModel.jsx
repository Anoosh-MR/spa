import { Box, Button, Modal } from "@mui/material";

import React, { useState } from "react";
import Fileview from "../FileView/Fileview";
import CustomizedProgressBars from "../ProgressBar/ProgressBar";

import {
  CloseBtn,
  Div,
  DropBox,
  DropBox2,
  Heading,
  IconAdd,
  UploadBtn,
} from "./UploadModel.styled";

const UploadModel = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFiles([]);
    setIsFilePicked(false);
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
              >
                Browse
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={FileHandler}
                />
              </Button>
            </DropBox>
          ) : (
            <Box>
              <DropBox2>
                {files?.map((img) => (
                  <Fileview key={img} img={img} />
                ))}
              </DropBox2>
            </Box>
          )}
          <CustomizedProgressBars />
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
              >
                Add more
              </Button>
              <Button
                sx={{ height: "30px", width: "150px", textTransform: "none" }}
                variant="contained"
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
