import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import logo1 from "./images/logo1.jpg";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "lightgrey",
        marginTop: "1%",
      }}
    >
      <div className = 'footer' style={{ height: "100%", marginRight: '20px' }}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={logo1} width="162px" style={{ marginTop: "6px" }} />{" "}
          <div>ABOUT US</div> <div>OUR WORK</div>
          <div>BLOG</div>
          <div>CONTACT</div>
          <div>FAQS</div><br/>
          <TwitterIcon color="primary" /> <FacebookIcon color="primary" />{" "}
          <GitHubIcon color="primary" />
          <LinkedInIcon color="primary" />
        </li>
      </div>
    </div>
  );
};

export default Footer;
