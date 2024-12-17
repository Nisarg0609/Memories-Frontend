import { makeStyles } from "@mui/material/styles";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.between("0", "600")]: {
      boxSizing: "border-box",
      padding: "0",
      margin: "0",
    },
  },
}));
