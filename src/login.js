import React from "react";
import SpringCard from "./spring";
import BusinessIcon from "@material-ui/icons/Business";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      {/* <div className ='spring' style={{display: 'flex', width: '100%', height: '40%'}}>
<SpringCard/>

            </div> */}
      <div style={{ width: "100%", height: "20%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
          }}
        >
          <span className="nice">Welcome to</span>
          <span className="nice">get your</span>
          <span className="nice">junior</span>
          <span className="nice">Coder</span>
        </div>
        {/* <div style={{display: 'flex', width: '100%', border: '2px solid green', width: 'min-content' , position: 'relative', left: '60%'}}> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
            position: "relative",
            left: "60%",
          }}
        >
          <form style={{ width: "480px" }}>
            <input type="text" placeholder="Email" style={{ width: "100%" }} />{" "}
            <br />
            <br />
            <input
              type="text"
              placeholder="Password"
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ width: "100%" }}
            >
              Login
            </Button>
            <br />
            <br />
          </form>
          <div style={{ fontFamily: "Didot", textAlign: "center" }}>
            You, as a company just click the Icon. No registration required.
          </div>
          <br />
          <Link to="/">
            {" "}
            <div style={{ textAlign: "center" }}>
              <BusinessIcon
                color="primary"
                style={{
                  fontSize: "6em",
                  boxShadow: "2px 2px 4px 4px lightgrey",
                }}
              />
              <br />
              <span style={{ fontFamily: "Didot", width: "100%" }}>
                Company Access
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
