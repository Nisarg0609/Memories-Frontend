import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import useStyles from "./postStyles";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deletePost,
  getPosts,
  likePost,
  getPost,
} from "../../../redux/actions/postActions";

const Post = ({ post, setCurrentId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  useEffect(() => {}, [post]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const page = query.get("page") || 1;

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === user?.result?._id) ? (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <FavoriteBorderIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <FavoriteBorderIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = () => {
    setCurrentId(post._id);
  };
  const deleteHandler = async() => {
    await dispatch(deletePost(post._id));
    dispatch(getPosts(page));
  };
  const likeHandler = () => {
    dispatch(likePost(post._id));
  };
  const onClickMedia = () => {
    dispatch(getPost(post.id));
    navigate(`${post._id}`);
  };
  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia
        onClick={onClickMedia}
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>

      {post.email === user?.result?.email && (
        <div className={classes.overlay2}>
          <Tooltip
            title={<Typography style={{ fontSize: "1rem" }}>Edit</Typography>}
            arrow
            className={classes.overlay2}
            placement="right"
          >
            <IconButton
              disabled={!user}
              size="small"
              style={{ color: "white" }}
              onClick={() => handleClick()}
            >
              <MoreHorizIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags === "" ? "no tags" : post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">
        {post.title}
      </Typography>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message.split(" ").splice(0, 35).join(" ")}...
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <div
          className={classes.cardActionDiv}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip
            title={<Typography style={{ fontSize: "1rem" }}>Like</Typography>}
            arrow
          >
            <IconButton
              disabled={!user}
              size="small"
              color="primary"
              onClick={likeHandler}
            >
              <Likes />
            </IconButton>
          </Tooltip>
        </div>

        {post.email === user?.result?.email && (
          <Tooltip
            title={<Typography style={{ fontSize: "1rem" }}>Delete</Typography>}
            arrow
          >
            <IconButton
              disabled={!user}
              size="small"
              color="error"
              onClick={() => deleteHandler()}
            >
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
