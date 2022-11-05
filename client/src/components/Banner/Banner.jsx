import { Typography } from "@mui/material";
import React from "react";
import { BannerBox, BannerContent, GridContainer1 } from "./Banner.styled";

const Banner = () => {
  return (
    <BannerBox>
      <BannerContent>
        <GridContainer1>
          <Typography
            className="BannerHeading"
            variant="h1"
            sx={{ fontSize: "3em" }}
          >
            Welcome to Rsquare.
          </Typography>
          <Typography
            variant="p"
            className="subHeading"
            sx={{ marginTop: "20px", fontSize: "0.8em" }}
          >
            Lets get you all set up so start with your account and begin setting
            up your profile.
          </Typography>
        </GridContainer1>
      </BannerContent>
    </BannerBox>
  );
};

export default Banner;
