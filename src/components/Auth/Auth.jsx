/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useStyles from "./authStyles";
import {
  Avatar,
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Grow,
} from "@mui/material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let res = null;
  let res2 = null;

  // ?password verification
  let hasSixChar = userData.password.length >= 6;
  let hasUpperChar = /(.*[A-Z].*)/.test(userData.password);
  let hasNumber = /(.*[0-9].*)/.test(userData.password);
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(userData.password);

  // ?email verification
  var e = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    userData.email
  );

  // ?Name verification
  let hasFName = userData.firstName.length >= 2;
  let hasLName = userData.lastName.length >= 2;

  const switchMode = () => {
    setIsSignUp(!isSignUp);
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleChangeSignIn = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const notify = (res) => {
    if (res === "successfully signed up" || res === "successfully signed in") {
      toast.success(res, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } else {
      toast.error(res, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    res = await dispatch(signUp(userData));
    notify(res);
  };
  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    res2 = await dispatch(signIn(userData));
    notify(res2);
  };

  useEffect(() => {
    if (res !== null || res2 !== null) {
      notify(res);
    }
  }, [res, res2, notify]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Grow in>
        <Container
          className={classes.mainContainer}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Paper className={classes.paper} style={{ maxWidth: "600px" }}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Typography>

            <form className={classes.form}>
              {isSignUp ? (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      value={userData.firstName}
                      label="First Name"
                      name="firstName"
                      fullWidth
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                    />
                    {userData.firstName && (
                      <FormHelperText>
                        {!hasFName && (
                          <Typography variant="body2" color="secondary">
                            contain at least two characters
                          </Typography>
                        )}
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      label="Last Name"
                      name="lastName"
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                    />
                    {userData.lastName && (
                      <FormHelperText>
                        {!hasLName && (
                          <Typography variant="body2" color="secondary">
                            contain at least two characters
                          </Typography>
                        )}
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                    />
                    {userData.email && !e && (
                      <FormHelperText>
                        <Typography variant="body2" color="secondary">
                          email contain one @, at least two character after dot and does
                          not contain space or special character
                        </Typography>
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        label="Password"
                        name="password"
                        type={!showPassword ? "text" : "password"}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment>
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <VisibilityOutlined />
                              ) : (
                                <VisibilityOffOutlined />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      ></OutlinedInput>
                    </FormControl>
                    <FormHelperText>
                      {userData.password &&
                        (!hasSixChar ||
                          !hasUpperChar ||
                          !hasSpecialChar ||
                          !hasNumber) && (
                          <Typography variant="body2" color="secondary">
                            password contain at least 6 character, one upperCase
                            character, one digit and one special character
                          </Typography>
                        )}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Repeat Password"
                      name="confirmPassword"
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                    />
                    {userData.password && userData.confirmPassword && (
                      <FormHelperText>
                        {userData.password !== userData.confirmPassword ? (
                          <Typography variant="body2" color="secondary">
                            Password does not match
                          </Typography>
                        ) : null}
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      disabled={
                        !userData.email ||
                        !userData.password ||
                        !userData.confirmPassword ||
                        !hasNumber ||
                        !hasSixChar ||
                        !hasSpecialChar ||
                        !hasUpperChar ||
                        userData.password !== userData.confirmPassword ||
                        !e
                      }
                      fullWidth
                      color="primary"
                      variant="contained"
                      size="small"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      style={{ backgroundColor: "transparent" }}
                      disableRipple
                      fullWidth
                      size="small"
                      onClick={switchMode}
                    >
                      ALREADY HAVE AN ACCOUNT? SIGN IN
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      value={userData.email}
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      variant="outlined"
                      size="small"
                      onChange={handleChangeSignIn}
                    />
                    {userData.email && !e && (
                      <FormHelperText>
                        <Typography variant="body2" color="secondary">
                          email contain one @, at least two character after dot and does
                          not contain space or special character
                        </Typography>
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        label="Password"
                        name="password"
                        type={!showPassword ? "text" : "password"}
                        onChange={handleChangeSignIn}
                        endAdornment={
                          <InputAdornment>
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <VisibilityOutlined />
                              ) : (
                                <VisibilityOffOutlined />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      ></OutlinedInput>
                    </FormControl>
                    <FormHelperText>
                      {userData.password &&
                        (!hasSixChar ||
                          !hasUpperChar ||
                          !hasSpecialChar ||
                          !hasNumber) && (
                          <Typography variant="body2" color="secondary">
                            password contain at least 6 character, one upperCase
                            character, one digit and one special character
                          </Typography>
                        )}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      disabled={
                        !userData.email ||
                        !userData.password ||
                        !hasNumber ||
                        !hasSixChar ||
                        !hasSpecialChar ||
                        !hasUpperChar ||
                        !e
                      }
                      fullWidth
                      color="primary"
                      variant="contained"
                      size="small"
                      onClick={handleSubmitSignIn}
                    >
                      Sign In
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      style={{ backgroundColor: "transparent" }}
                      disableRipple
                      fullWidth
                      size="small"
                      onClick={switchMode}
                    >
                      DON'T HAVE AN ACCOUNT? SIGN UP
                    </Button>
                  </Grid>
                </Grid>
              )}
            </form>
          </Paper>
        </Container>
      </Grow>
    </>
  );
};

export default Auth;
