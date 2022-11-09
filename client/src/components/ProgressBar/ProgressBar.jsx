import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
}));

// Inspired by the former Facebook spinners.

export default function CustomizedProgressBars({ multipleProgress }) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "2px" }}>
      <BorderLinearProgress variant="determinate" value={multipleProgress} />
    </Box>
  );
}
