import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("1150")]: {
      flexWrap: "wrap",
      flexDirection: "column-reverse",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    [theme.breakpoints.up("2200")]: {
      width: "50%",
      marginRight: "70px",
    },
    [theme.breakpoints.between("1800", "2200")]: {
      width: "65%",
      marginRight: "50px",
    },
    [theme.breakpoints.between("1500", "1800")]: {
      width: "75%",
      marginRight: "50px",
    },
    [theme.breakpoints.between("1300", "1500")]: {
      width: "80%",
      marginRight: "50px",
    },
    [theme.breakpoints.between("1200", "1300")]: {
      width: "110%",
      marginRight: "40px",
    },
    [theme.breakpoints.between("1150", "1200")]: {
      width: "130%",
      marginRight: "40px",
    },
    [theme.breakpoints.down("1150")]: {
      marginTop: "40px",
    },
  },
  RatingDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("500")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
  },
  RatingDivTitle: {
    marginRight: "70px",
    [theme.breakpoints.down("500")]: {
      marginRight: "0px",
    },
  },
  RatingDiv2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    marginRight: "20px",
    [theme.breakpoints.down("500")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "6px",
    },
  },
  RatingInnerDiv: {
    [theme.breakpoints.down("500")]: {
      marginLeft: "20px",
    },
  },
  rating: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("390")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  reting2: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("310")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  ratingButton: {
    marginLeft: "20px",
    [theme.breakpoints.down("420")]: {
      marginLeft: "0px",
    },
  },
  imageSection: {
    [theme.breakpoints.down("380")]: {
      width: "100%",
    },
  },
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
  },
  commentsContainer: {
    width: "60%",
    [theme.breakpoints.down("700")]: {
      width: "100%",
    },
  },

  section2: {
    marginTop: "10px",
    flex: 1,
  },
  recommendedPosts: {
    display: "flex",
    marginTop: "15px",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    [theme.breakpoints.down("350")]: {
      flexDirection: "column",
    },
  },
  recommendedPostsPaper: {
    width: "300px",
    height: "420px",
    [theme.breakpoints.down("1700")]: {
      width: "250px",
      height: "370px",
    },
    [theme.breakpoints.down("1350")]: {
      width: "230px",
      height: "320px",
    },
  },
  recommendedPostsImage: {
    width: "300px",
    height: "45%",
    marginBottom: "10px",
    [theme.breakpoints.down("1700")]: {
      width: "250px",
    },
    [theme.breakpoints.down("1350")]: {
      width: "230px",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("700")]: {
      flexDirection: "column",
    },
  },
  commentsInnerContainer: {
    width: "35%",
    height: "200px",
    overflowY: "auto",
    marginRight: "10px",
    [theme.breakpoints.down("700")]: {
      width: "100%",
      height: "100px",
      marginBottom: "35px",
    },
  },
}));
