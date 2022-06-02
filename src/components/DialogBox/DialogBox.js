import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../AllCreators/AllCreators.css";

export default function DialogBox({ creator, open, handleOpen, handleClose }) {
  const theme = createTheme({});

  const [amount, setAmount] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    console.log(amount);

    if (amount > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [amount]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };

  const handleSubmit = () => {
    console.log(amount, name, msg, creator);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <div className="topbar">
              <div>
                <IconButton onClick={handleClose} size="small">
                  <ArrowBackIosNewIcon />
                </IconButton>
              </div>
              <Avatar sx={{ width: 56, height: 56 }} src={creator.profileUrl} />
              <span className="modaltitle">
                <div className="userName">{creator.userName}</div>
                <CheckCircleOutlineIcon />
              </span>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText container>
              Send your love to {creator.userName} to become a real fan.
            </DialogContentText>

            <FormControl fullWidth>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      type="number"
                      required
                      fullWidth
                      value={amount}
                      onChange={handleAmountChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Your Name(optional)"
                      variant="outlined"
                      fullWidth
                      onChange={handleName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Say something nice...(optional)"
                      multiline
                      rows={4}
                      fullWidth
                      onChange={handleMsgChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </FormControl>
          </DialogContent>
          <DialogActions
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "0",
            }}
          >
            <Button
              disabled={btnDisabled}
              variant="contained"
              className="submitbutton"
              onClick={handleSubmit}
            >
              {" "}
              <div className="amountdiv">Support ${amount}</div>
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
