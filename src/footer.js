import React, { useState } from "react";
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
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "lightgrey",
        marginTop: "1%",
      }}
    >
      <div className="footer" style={{ height: "100%", marginRight: "20px" }}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={logo1} width="162px" style={{ marginTop: "6px" }} />{" "}
          <div>ABOUT US</div>
          <Link
            to="/aboutthisproject"
            style={{
              textDecoration: "none",
            }}
          >
            ABOUT THIS PROJECT
          </Link>
          <div>BLOG</div>
          <div>CONTACT</div>
          <div>FAQS</div>
          <br />
          <TwitterIcon className="icons" color="primary" />
          <FacebookIcon className="icons" color="primary" />{" "}
          <a
            href="https://github.com/Staifo"
            target="blanc"
            style={{ textDecoration: "none" }}
          >
            <GitHubIcon className="icons" color="primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/istayfo-ergun-a606a564/"
            target="_blanc"
          >
            <LinkedInIcon className="icons" color="primary" />
          </a>
          <div
            style={{
              color: "white",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CopyrightIcon style={{ color: "white", fontSize: "16px" }} />{" "}
            {date} Istayfo Ergün, All rights reserved
          </div>
        </li>
      </div>
    </div>
  );
};

export default Footer;
