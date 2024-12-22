import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down("500")]: {
      boxSizing: "border-box",
    },
    [theme.breakpoints.down("1200")]: {
      boxSizing: "border-box",
    },
  },
  gridContainer: {
    margin: "0px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("1200")]: {
      flexDirection: "column-reverse",
    },
  },
  gridPosts: {
    margin: "0px",
    [theme.breakpoints.up("2500")]: {
      width: "80%",
    },
    [theme.breakpoints.down("2500")]: {
      width: "75%",
    },
    [theme.breakpoints.down("1550")]: {
      width: "70%",
    },
    [theme.breakpoints.down("1200")]: {
      width: "100%",
    },
  },
  gridForm: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("2500")]: {
      width: "20%",
    },
    [theme.breakpoints.down("2500")]: {
      width: "25%",
    },
    [theme.breakpoints.down("1550")]: {
      width: "30%",
    },
    [theme.breakpoints.between("700", "1200")]: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: "-50px",
      // marginBottom: '20px'
    },
    [theme.breakpoints.down("700")]: {
      width: "100%",
      flexDirection: "column",
      marginBottom: "20px",
    },
  },
  appBar: {
    height: "250px",
    [theme.breakpoints.down("1200")]: {
      width: "45%",
    },
    [theme.breakpoints.down("700")]: {
      width: "96%",
    },
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  FormItem: {
    [theme.breakpoints.between("700", "1200")]: {
      width: "45%",
    },
    [theme.breakpoints.down("700")]: {
      width: "96%",
    },
  },
  emptyDiv: {},
  paginate: {
    [theme.breakpoints.down("700")]: {
      width: "96%",
    },
  },
  paginate2: {
    [theme.breakpoints.down("700")]: {
      width: "96%",
    },
    [theme.breakpoints.up("700")]: {
      visibility: "none",
      display: "none",
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
    [theme.breakpoints.down("350")]: {
      padding: "16px 6px",
    },
  },
  pagination2: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
    [theme.breakpoints.down("350")]: {
      padding: "16px 6px",
    },
  },
}));
