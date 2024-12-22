import { useEffect, useState } from "react";
import { Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./navbarStyles";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/memories-Text.png";

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logoutHandle = () => {
    setUser(null);
    dispatch(logout(navigate));
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div color="inherit" className={classes.appBar}>
      <Link to="/" className={classes.brandContainer}>
        <img src={memoriesText} alt="icon" className={classes.imageText} />
        <img src={memoriesLogo} alt="icon" className={classes.imageLogo} />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple}>{user?.result?.name.charAt(0)}</Avatar>
            <Typography variant="h6" className={classes.userName}>
              {user?.result?.name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.logout}
              onClick={logoutHandle}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="contained" color="primary" component={Link} to="/auth">
            Login
          </Button>
        )}
      </Toolbar>
    </div>
  );
};

export default NavBar;
