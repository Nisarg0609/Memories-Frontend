import "./App.css";
import { Container } from "@mui/material";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App = () => {
  return (
    <div style={{ padding: "1rem 0rem" }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container maxWidth="100%">
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Navigate to="/posts" />} />
              <Route path="/posts" exact element={<Home />} />
              <Route path="/posts/search" exact element={<Home />} />
              <Route path="/posts/search/:id" exact element={<PostDetails />} />
              <Route path="/posts/:id" exact element={<PostDetails />} />
              <Route path="/auth" exact element={<Auth />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
