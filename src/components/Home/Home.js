import React from "react";
import {Container, Grow, Grid, Paper, AppBar, TextField, Button,} from "@material-ui/core";
import { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts, getPostBySearch } from "../../redux/actions/postActions";
import { useDispatch } from "react-redux";
import useStyles from "./homeStyles";
import { useSelector } from "react-redux";

import Paginate from "../Paginate";
import ChipInput from "material-ui-chip-input";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const classes = useStyles();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [width,setWidth] = useState(window.innerWidth)

  console.log(width,'width')

  const searchPost = () => {
    if (search === "" && tags.length === 0) {
      navigate("/");
    } else if (search.trim() || tags) {
      dispatch(getPostBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",") || "none"
        }`
      );
    } else {
      navigate("/");
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);
  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  useEffect(() => { 
    setUser(JSON.parse(localStorage.getItem('profile')))
    setWidth(window.innerWidth)
  }, [user,width]);

  return (
    <Grow in>
    <Container className={classes.mainContainer} maxWidth='100%' >
      <Grid className={classes.gridContainer} container spacing={3}>

      <Grid item className={classes.paginate2}>
              {posts?.length ? (
                <Paper className={classes.pagination2} elevation={6}>
                  <Paginate page={page} />
                </Paper>
              ) : (
                <></>
              )}
      </Grid>

        <Grid item className={classes.gridPosts}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>

        <Grid item className={classes.gridForm}>

            <Grid item className={classes.appBar}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField name="search" label="Search Memories" fullWidth variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress}/>
                <ChipInput style={{ margin: "10px 0 30px 0" }} variant="outlined" label="Search Tags" helperText="press Enter for multiple tags" value={tags} onAdd={handleAddChip} onDelete={handleDeleteChip}/>
                <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
              </AppBar>
            </Grid>

            <Grid item className={classes.FormItem}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            
            <Grid item className={classes.emptyDiv}></Grid>
            
            {
              user && (<Grid item className={classes.paginate}>
              {posts?.length ? (
                <Paper className={classes.pagination} elevation={6}>
                  <Paginate page={page} />
                </Paper>
              ) : (
                <></>
              )}
            </Grid>)
            }
            {
              !user && (width>1200 || width<700) &&(<Grid item className={classes.paginate}>
              {posts?.length ? (
                <Paper className={classes.pagination} elevation={6}>
                  <Paginate page={page} />
                </Paper>
              ) : (
                <></>
              )}
            </Grid>)
            }
            {
              !user && (width>=700 && width<=1200) && (
                <Grid item className={classes.paginate} 
                  style={{width:'45%',position:'relative',left:'50%',bottom:'106px'}}
                >
                    {posts?.length ? (
                      <Paper className={classes.pagination} elevation={6}>
                        <Paginate page={page} />
                      </Paper>
                    ) : (
                      <></>
                    )}
                </Grid>)
            }
        </Grid>
      </Grid>
    </Container>
    </Grow>
  );
};

export default Home;
