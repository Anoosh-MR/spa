import { Checkbox, Chip, IconButton, ImageListItem } from "@mui/material";
import React from "react";
import { ImageListItemsTop, Images } from "./ImageView.styled";

const PF = "http://localhost:5000/";

const ImageView = ({ file }) => {
  return (
    <ImageListItem
      sx={{
        margin: "5px",
        border: "1px",
        borderRadius: "10px",
      }}
    >
      <ImageListItemsTop
        sx={{
          background: "none",
        }}
        position="top"
        actionIcon={
          <IconButton>
            <Checkbox />
          </IconButton>
        }
        actionPosition="left"
      />

      <Images
        className="images"
        src={PF + file.filePath}
        alt={PF + file.filePath}
        loading="lazy"
      />

      <ImageListItemsTop
        title={file.fileName}
        subtitle={file.fileSize}
        actionIcon={
          <Chip className="chip" color="info" label={file.fileType} />
        }
      />
    </ImageListItem>
  );
};

export default ImageView;
