import React, { useEffect, useState } from "react";
import { TextField, Paper, Typography, Button } from "@mui/material";
import useStyles from "./formStyles";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts, updatePost } from "../../redux/actions/postActions";
import { useLocation, useSearchParams } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  const [searchParams] = useSearchParams()
  const page = searchParams.get("page") || '1'

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((post) => post._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (currentId) {
      console.log(currentId, "cId");
      dispatch(
        updatePost(currentId, {
          ...postData,
          name: user?.result?.name,
          email: user?.result?.email,
        })
      );
    } else {
      await  dispatch(
        createPost({ ...postData, name: user?.result?.name, email: user?.result?.email })
      );
      dispatch(getPosts(page))
    }
    resetHandler();
    setCurrentId(null);
  };
  const resetHandler = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(null);
  };

  if (!user) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }
  return (
    <>
      <Paper className={classes.paper} color="inherit" elevation={6}>
        <form className={`${classes.form} ${classes.root}`} onSubmit={submitHandler}>
          <Typography variant="h6">
            {currentId ? "Editing" : "Creating"} a Memories
          </Typography>

          <TextField
            required
            name="title"
            label="Title"
            fullWidth
            variant="outlined"
            size="small"
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />

          <TextField
            required
            name="message"
            label="Message"
            fullWidth
            variant="outlined"
            size="small"
            value={postData.message}
            multiline
            rows={4}
            onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          />

          <TextField
            name="tags"
            label="Tags"
            fullWidth
            variant="outlined"
            size="small"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />

          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
          </div>

          <Button
            type="submit"
            size="small"
            variant="contained"
            fullWidth
            color="primary"
            style={{ marginBottom: "0.5rem" }}
          >
            Submit
          </Button>

          <Button
            type="submit"
            size="small"
            variant="contained"
            fullWidth
            color="secondary"
            onClick={resetHandler}
          >
            Reset
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
