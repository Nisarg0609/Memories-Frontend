/* eslint-disable react/prop-types */
import { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import useStyles from "./postDetailsStyles";
import { commentPost } from "../../redux/actions/postActions";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleClick = async () => {
    const finalComment = `${user?.result.name} : ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment("");
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography variant="h6" gutterBottom>
            Comments
          </Typography>
          {comments &&
            comments?.map((c) => (
              // eslint-disable-next-line react/jsx-key
              <Typography variant="subtitle1" gutterBottom>
                <strong>{c.split(": ")[0]} : </strong>
                {c.split(":")[1]}
              </Typography>
            ))}
        </div>

        <div className={classes.commentsContainer}>
          <Typography variant="h6" gutterBottom>
            Add Comments
          </Typography>
          <TextField
            variant="outlined"
            disabled={!user}
            label="Comment"
            fullWidth
            rows={4}
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            disabled={!comment}
            variant="contained"
            style={{ marginTop: "10px" }}
            fullWidth
            color="primary"
            onClick={handleClick}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
