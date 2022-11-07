import { Box, CardMedia, Grid } from "@mui/material";
import { Btn, Card, DetailBox, RemoveImg } from "./FileView.styled";
import CloseIcon from "@mui/icons-material/Close";
import { sizeConvertion } from "../../config/logics";
import { height } from "@mui/system";

const Fileview = ({ img }) => {
  console.log(img);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "5px",
        ml: "10px",
        width: "100px",
        height: "120px",
      }}
    >
      <Btn>
        <RemoveImg color="primary" s />
      </Btn>
      <Card
        style={{}}
        component="img"
        image={URL.createObjectURL(img)}
        alt="work portfolio"
      />
      <DetailBox>
        <p>{img.name.length > 8 ? img.name.slice(0, 8 - 1) : img.name}</p>
        <p>{sizeConvertion(img.size)}</p>
      </DetailBox>
    </Box>
  );
};

export default Fileview;
