import React from "react";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";
import logo4 from "./images/logo4.png";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Link to="./" style={{ textDecoration: "none" }}>
        <div style={{ marginLeft: "" }}>
          <img src={logo4} width="90px" />
        </div>
      </Link>
      <Link to="./" style={{ textDecoration: "none", color: "black" }}>
        <div
          style={{
            fontSize: "60px",
            fontFamily: "Impact",
            fontWeight: "bold",
            fontFamily: "Impact",
            opacity: "0.2",
          }}
        >
          JuniorCoder
        </div>
      </Link>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "center",}}
      >
        <Searchbar />
      </div>
      <Link
        to="/"
        style={{
          marginRight: "2%",
          marginTop: "1.6%",
          marginBottom: "1%",
          textDecoration: "none",
        }}
      >
        <Button variant="contained" color="primary">
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
      {/* <Button variant="contained" color="primary" style={{marginRight: '2%', marginTop: '1%', marginBottom: '1%'}}>
                 Login
                </Button> */}
      <Link
        to="/login"
        style={{ marginRight: "2%", marginTop: "1.6%", marginBottom: "1%", textDecoration: 'none' }}
      >
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
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
      />
    </div>
  );
};

export default Navbar;
