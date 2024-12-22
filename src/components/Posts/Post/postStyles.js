import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.between("1050", "1200")]: {
      paddingTop: "65%",
    },
    [theme.breakpoints.down("740")]: {
      paddingTop: "65%",
    },
    [theme.breakpoints.down("550")]: {
      paddingTop: "56.25%",
    },
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    [theme.breakpoints.down("1200")]: {
      margin: "15px 20px 10px 20px",
    },
  },
  cardContent: {
    [theme.breakpoints.down("1200")]: {
      padding: "8px 16px 16px 16px",
    },
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
}));
