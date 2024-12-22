import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainGrid: {
    width: "100%",
    display: "flex",
    paddingRight: "0px",
  },
  postGrid: {
    [theme.breakpoints.up("2500")]: {
      width: "25%",
    },
    [theme.breakpoints.down("2500")]: {
      width: "33%",
    },
    [theme.breakpoints.down("1550")]: {
      width: "48%",
    },
    [theme.breakpoints.down("1200")]: {
      width: "33.33%",
    },
    [theme.breakpoints.down("1050")]: {
      width: "50%",
    },
    [theme.breakpoints.down("700")]: {
      width: "100%",
    },
  },
}));
