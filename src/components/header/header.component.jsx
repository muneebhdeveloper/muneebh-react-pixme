import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { BsSearch, BsGrid3X3Gap } from "react-icons/bs";
import { Container, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { clearCurrentUser } from "../../redux/user/user.action";
import "./header.styles.css";

function Header({ variation }) {
  const { currentUser } = useSelector((state) => state.user);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCurrentUser());
    setIsLoggedIn(false);
    console.log(`isLoggedin ${isLoggedin}`);
    console.log(currentUser);
  };

  useEffect(() => {
    if (currentUser !== null) {
      setIsLoggedIn(true);
    }
    console.log(`isLoggedin ${isLoggedin}`);
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div className={`${variation === "home" ? "header-home" : ""} header`}>
      <Container>
        <div className="container">
          <Link to="/" className="header_brand">
            <img src={logo} alt="" />
          </Link>
          <div className="header_search">
            <form>
              <input
                type="text"
                name="search"
                placeholder="Search Here"
                id="search"
              />
              <button className="header_search-btn">
                <BsSearch />
              </button>
            </form>
          </div>
          <div className="header_nav-items">
            <Link to="#">Spirits</Link>
            <Link to="#">Ingredients</Link>
          </div>
          <div className="header_right">
            <div className="header_nav-items">
              {isLoggedin !== false ? (
                <Button
                  variant="contained"
                  type="button"
                  disableElevation
                  color="primary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </div>
            <div className="header_menu">
              <BsGrid3X3Gap className="header_menu-icon" color="white" />
            </div>
            <div className="header_user">
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
