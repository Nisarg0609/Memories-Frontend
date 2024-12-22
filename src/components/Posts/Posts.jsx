import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./postsStyles";

const Posts = ({ setCurrentId }) => {
  const query = useQuery();
  const page = query.get("page") || 1;
  const navigate = useNavigate();
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => state.posts);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  if (page !== 1 && !posts?.length) {
    navigate(-1);
  }

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  if (!posts.length && !isLoading) {
    return <Typography variant="h6">No Posts Found</Typography>;
  }

  return (
    <Grid container spacing={3} className={classes.mainGrid}>
      {posts.map((post) => (
        <Grid key={post._id} item className={classes.postGrid}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
