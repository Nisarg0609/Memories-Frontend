import { makeStyles } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    position: "sticky",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#e4e4e4",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("1000")]: {
      padding: "10px 20px",
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 300,
  },
  image: {
    marginLeft: "10px",
    marginTop: "5px",
  },
  imageText: {
    [theme.breakpoints.up("1000")]: {
      height: "45px",
    },
    [theme.breakpoints.down("1000")]: {
      height: "35px",
    },
    [theme.breakpoints.down("610")]: {
      display: "none",
    },
    marginRight: "8px",
  },
  imageLogo: {
    [theme.breakpoints.up("1000")]: {
      height: "45px",
    },
    [theme.breakpoints.down("1000")]: {
      height: "35px",
    },
    [theme.breakpoints.between("0", "750")]: {
      display: "none",
    },
    [theme.breakpoints.down("610")]: {
      marginRight: "20px",
      display: "flex",
      height: "40px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.between("0", "610")]: {
      justifyContent: "flex-end",
      width: "70%",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    alignItems: "center",
    [theme.breakpoints.between("750", "900")]: {
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.between("0", "750")]: {
      display: "flex",
      flex: 2,
      justifyContent: "space-around",
      width: "auto",
    },
    [theme.breakpoints.down("610")]: {
      display: "flex",
      flex: 2,
      justifyContent: "space-between",
    },
    [theme.breakpoints.between("550", "700")]: {
      marginLeft: "40px",
    },
    [theme.breakpoints.between("450", "550")]: {
      marginLeft: "20px",
    },
  },
  logout: {
    marginLeft: "20px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.between("0", "750")]: {
      display: "none",
    },
  },
}));
