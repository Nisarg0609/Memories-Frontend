import axios from "axios";

// const url = "http://localhost:5000/posts"
// const url2 = "http://localhost:5000/users"
const url = "https://memories-backend-2rjp.onrender.com/posts";
const url2 = "https://memories-backend-2rjp.onrender.com/users";


axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// posts
export const createPost = (newPost) => axios.post(url, newPost);
export const getPosts = (page) => axios.get(`${url}?page=${page}`);
export const getPost = (id) => axios.get(`${url}/${id}`);
export const fetchPostBySearch = (searchQuery) =>
  axios.get(
    `http://localhost:5000/posts/search?searchQuery=${
      searchQuery.search || "none"
    }&tags=${searchQuery.tags}`
  );
export const updatePost = (id, updateData) => axios.patch(`${url}/${id}`, updateData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/like`);
export const commentPost = (value, id) => axios.post(`${url}/${id}/comment`, { value });
export const ratingPost = (rating, id) => axios.post(`${url}/${id}/rating`, { rating });

// users
export const signUp = (userData) => axios.post(`${url2}/signUp`, userData);
export const signIn = (userData) => axios.post(`${url2}/signIn`, userData);
