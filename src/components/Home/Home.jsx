import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts, getPostBySearch } from "../../redux/actions/postActions";
import { useDispatch } from "react-redux";
import useStyles from "./homeStyles";
import { useSelector } from "react-redux";

import Paginate from "../Paginate";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  console.log(page, "page");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [width, setWidth] = useState(window.innerWidth);

  const searchPost = () => {
    if ((search !== "" && tags.length !== 0 && search.trim()) || tags) {
      dispatch(getPostBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",") || "none"}`
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleTagChange = (event, newTags) => {
    setTags(newTags);
  };

  // useEffect(() => {
  //   dispatch(getPosts(page));
  //   console.log("effect", page);
  // }, [dispatch, page]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    setWidth(window.innerWidth);
  }, []);

  return (
    <Grow in>
      <Container className={classes.mainContainer} maxWidth="100%">
        <Grid className={classes.gridContainer} container spacing={3}>
          <Grid item className={classes.paginate2}>
            <Paper className={classes.pagination2} elevation={6}>
              <Paginate page={page} />
            </Paper>
          </Grid>

          <Grid item className={classes.gridPosts}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>

          <Grid
            item
            className={classes.gridForm}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item className={classes.appBar}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField
                  name="search"
                  label="Search Memories"
                  fullWidth
                  variant="outlined"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyPress}
                />

                {/* Replace ChipInput with Autocomplete */}
                <Autocomplete
                  multiple
                  freeSolo
                  value={tags}
                  onChange={handleTagChange}
                  options={[]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Search Tags"
                      helperText="Press Enter for multiple tags"
                    />
                  )}
                  style={{ margin: "10px 0 30px 0" }}
                />

                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </AppBar>
            </Grid>

            <Grid item className={classes.FormItem}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>

            <Grid item className={classes.emptyDiv}></Grid>

            {user && (
              <Grid item className={classes.paginate}>
                {posts?.length ? (
                  <Paper className={classes.pagination} elevation={6}>
                    <Paginate page={page} />
                  </Paper>
                ) : (
                  <></>
                )}
              </Grid>
            )}
            {!user && (width > 1200 || width < 700) && (
              <Grid item className={classes.paginate}>
                {posts?.length ? (
                  <Paper className={classes.pagination} elevation={6}>
                    <Paginate page={page} />
                  </Paper>
                ) : (
                  <></>
                )}
              </Grid>
            )}
            {!user && width >= 700 && width <= 1200 && (
              <Grid
                item
                className={classes.paginate}
                style={{
                  width: "45%",
                  position: "relative",
                  left: "50%",
                  bottom: "106px",
                }}
              >
                {posts?.length ? (
                  <Paper className={classes.pagination} elevation={6}>
                    <Paginate page={page} />
                  </Paper>
                ) : (
                  <></>
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
