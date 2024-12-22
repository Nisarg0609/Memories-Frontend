import { useEffect, useState } from "react";
import { Typography, Paper, CircularProgress, Divider, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Rating } from "@mui/material";
import moment from "moment";
import useStyles from "./postDetailsStyles";
import { getPost, ratingPost } from "../../redux/actions/postActions";
import CommentSection from "./CommentSection";
import StarOutlined from "@mui/icons-material/StarOutlined";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [rating, setRating] = useState(0);
  const [value, setValue] = useState(0);
  const [reviews, setReviews] = useState(post?.reviews);

  const user = JSON.parse(localStorage.getItem("profile"));
  const index = post?.ratingId?.findIndex((id) => id === user?.result._id);

  useEffect(() => {
    if (index === -1) {
      setValue(0);
    } else {
      setValue(post?.ratingArray[index]);
    }
  }, [index, post?.ratingArray, post?.ratingId]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleRating = async () => {
    console.log(value, "rating");
    const { newRating, newReview } = await dispatch(ratingPost(value, post._id));
    setRating(Math.round(newRating));
    setReviews(newReview);
  };

  useEffect(() => {
    console.log(post?.rating, "e");
    setRating(Math.round(post?.rating));
    setReviews(post?.reviews);
  }, [post?.rating, post?.reviews]);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  if (isLoading || !post) {
    return (
      <Paper className={classes.loadingProgress} elevation={6}>
        <CircularProgress size="4em" />
      </Paper>
    );
  }

  const recommendedPosts = posts?.filter((p) =>
    p.tags.some((tag) => p._id !== post._id && post.tags.includes(tag))
  );

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <div className={classes.RatingDiv}>
            <Typography
              className={classes.RatingDivTitle}
              style={{ display: "inline-block" }}
              variant="h3"
              component="h2"
            >
              {post.title}
            </Typography>

            <div className={classes.RatingDiv2}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5">{rating}</Typography>

                <StarOutlined
                  fontSize="65px"
                  size="large"
                  color="secondary"
                  style={{ height: "22px", width: "22px" }}
                />
              </div>

              <Typography variant="body2" className={classes.RatingInnerDiv}>
                {reviews} reviews
              </Typography>
            </div>
          </div>

          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            component="p"
            style={{ margin: "15px 0" }}
          >
            {post.message}
          </Typography>

          <Typography variant="h6">Created by: {post.name}</Typography>

          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>

          <Divider style={{ margin: "20px 0" }} />

          <div className={classes.rating}>
            <div className={classes.reting2}>
              <Typography variant="h6" component="h5">
                Rating &nbsp; : &nbsp;
              </Typography>
              <Rating
                disabled={!user}
                size="large"
                value={value}
                onChange={handleChange}
                precision={1}
                icon={<StarOutlined fontSize="inherit" />}
                emptyIcon={<StarBorderOutlined fontSize="inherit" />}
              />
            </div>
            <Button
              className={classes.ratingButton}
              disabled={!user}
              size="small"
              color="primary"
              onClick={handleRating}
            >
              POST
            </Button>
          </div>

          <Divider style={{ margin: "20px 0" }} />

          <CommentSection post={post} />

          <Divider style={{ margin: "20px 0" }} />
        </div>

        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={`${
              post.selectedFile
                ? post.selectedFile
                : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }`}
            alt={post.title}
            style={{
              minWidth: "800px",
              maxWidth: "1400px",
            }}
          />
        </div>
      </div>
      {recommendedPosts?.length ? (
        <div className={classes.section2}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />

          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, likes, selectedFile, _id }) => (
              <Paper
                className={classes.recommendedPostsPaper}
                elevation={4}
                component={Link}
                to={`/posts/${_id}`}
                style={{ margin: "20px ", cursor: "pointer", textDecoration: "none" }}
                key={_id}
              >
                <img
                  src={`${
                    selectedFile
                      ? selectedFile
                      : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                  }`}
                  alt=""
                  className={classes.recommendedPostsImage}
                />
                <div style={{ padding: "0 10px" }}>
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.message.substr(0, 70)}...
                  </Typography>
                  <Typography variant="subtitle1">Likes: {likes.length}</Typography>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </Paper>
  );
};

export default PostDetails;
