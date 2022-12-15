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
        width: "270px",
      }}
    >
      <ImageListItemsTop
        sx={{
          background: "none",
        }}
        position="top"
        actionIcon={
          <IconButton>
            <Checkbox color="error" />
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
    </ImageListItem>
  );
};

export default ImageView;
