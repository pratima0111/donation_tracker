import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./AllCreators.css";
import { useState } from "react";
import DialogBox from "../DialogBox/DialogBox";

export default function ActionAreaCard({ creator }) {
  const theme = createTheme({
    typography: {
      h6: {
        fontSize: "1rem",
        fontWeight: "bold",
        lineHeight: "1",
      },
    },
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card sx={{ maxWidth: 345 }} onClick={handleOpen}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={creator.profileUrl}
            alt="profile img"
            style={{ width: "100%", height: "90%", borderRadius: "10px" }}
          />
          <CardContent>
            <div className="nameDiv">
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="userName"
              >
                {creator.userName}
              </Typography>
              <FavoriteBorderIcon className="favoriteIcon" />
            </div>

            <Typography variant="body2" color="text.secondary">
              {creator.profession}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <DialogBox
        creator={creator}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </ThemeProvider>
  );
}
