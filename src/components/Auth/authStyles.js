import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down("400")]: {
      width: "310px",
    },
    [theme.breakpoints.between("400", "610")]: {
      width: "340px",
    },
    [theme.breakpoints.between("610", "1500")]: {
      width: "400px",
    },
    [theme.breakpoints.up("1501")]: {
      width: "550px",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 1.5rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));
