import React from "react";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";
import logo4 from "./images/logo4.png";
import { useHistory } from "react-router-dom";

const Navbar = ({ handleChange, key, handleOnClick, userInput, search }) => {
  const history = useHistory();

  const handleClick = () => {
    if (search) {
      window.location.reload();
    } else if (!search) {
      history.push("/");
      window.location.reload();
    }
  };

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <div onClick={handleClick} style={{ marginTop: "2%" }}>
          <img src={logo4} width="120px" />
        </div>
      </Link>
      <Link
        onClick={handleClick}
        to="/"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          style={{
            fontSize: "80px",
            fontFamily: "Impact",
            fontWeight: "bold",
            fontFamily: "Impact",
            opacity: "0.2",
          }}
        >
          JuniorCoder
        </div>
      </Link>
      <div className="searchbar" style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Searchbar
            handleChange={handleChange}
            key={key}
            handleOnClick={handleOnClick}
            userInput={userInput}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              marginRight: "2%",
              marginTop: "1.6%",
              marginBottom: "1%",
              textDecoration: "none",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleClick}>
              Home
            </Button>{" "}
          </Link>
          <Link
            to="/info"
            style={{
              marginRight: "2%",
              marginTop: "1.6%",
              marginBottom: "1%",
              textDecoration: "none",
            }}
          >
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Link>
          <Link
            to="/login"
            style={{
              marginRight: "2%",
              marginTop: "1.6%",
              marginBottom: "1%",
              textDecoration: "none",
            }}
          >
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "20%",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "40px",
        }}
      >
        <LinkedInIcon
          style={{ marginRight: "2%", marginTop: "1.6%", marginBottom: "1%" }}
          color="primary"
        />
        <FacebookIcon
          style={{ marginRight: "2%", marginTop: "1.6%", marginBottom: "1%" }}
          color="primary"
        />
        <TwitterIcon
          style={{ marginRight: "2%", marginTop: "1.6%", marginBottom: "1%" }}
          color="primary"
        />
        <GitHubIcon
          style={{ marginRight: "2%", marginTop: "1.6%", marginBottom: "1%" }}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Navbar;
