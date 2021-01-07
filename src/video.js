import React, { useState } from "react";
import ReactPlayer from "react-player";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Video = ({ url }) => {


  const classes = useStyles();
  return (
    <div
    className='videoDiv'
      style={{
        height: "min-content",
        width: "min-content",
        marginTop: "20px",
        display: "flex",
        justifyContent: 'center',
        whiteSpace: "none",
        position: "sticky",
        top: "0",
        width: '100%',

        
        
      }}
    >
      {!url && (
        <ReactPlayer
          className = 'videoOne'
          url="https://cdn.videvo.net/videvo_files/video/free/2013-08/small_watermarked/hd0983_preview.webm"
          muted={false}
          playing={true}
          loop={true}
          controls={true}
        />
      )}
      {url && (
        <ReactPlayer
        
          url={`${process.env.NODE_ENV === "production" ? process.env.REACT_APP_DEPLOYED : process.env.REACT_APP_LOCAL}/uploads/${url}`}
          style={{ width: "100%", flex: 1, height: "48%", marginRight: "2%",}}
          muted={false}
          playing={true}
          loop={false}
          controls={true}
         
        />
      )}
      {/* <Grid container spacing={3} style={{ marginTop: "4%" }} className='job'>
        <Grid item xs={12} style={{ width: "400px" }}>
          <Paper className={classes.paper} style={{ wordBreak: "break-all" }}>
            <Paper style={{ fontSize: "20px", fontWeight: "bold" }}>
              Job Vacancies
            </Paper>
            <div>
              <div
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  marginTop: "4%",
                  overflowWrap: "break-word",
                  wordBreak: "word-break",
                }}
              >
                <a href="https://www.wbscodingschool.com/career-services/">
                  <div
                    className="jobs"
                    style={{ color: "blue", width: "100%" }}
                  >
                    WBS Coding School offers Junior Developer Position, start
                    ASAP, vacancies: 100{" "}
                    <p style={{ fontSize: "14px", color: "grey" }}>
                      We are looking for passionate Junior Developers of all
                      kinds for the next possible starting date. <br />
                      Just click on the link and you will be redirected to our
                      homepage{" "}
                    </p>
                  </div>
                </a>
                <div className="jobs" style={{ color: "blue", width: "100%" }}>
                  TESLA Coding School offers Junior Developer Positions, vacancies: 10000, <br />
                  location: worldwide{" "}
                  <p style={{ fontSize: "14px", color: "grey" }}>
                    We are looking for passionate Junior Developers of all kinds
                    for the next possible starting date to <br />
                    support our worldwide network Just click on the link and you
                    will be redirected to our homepage{" "}
                  </p>
                </div>
                <div
                  className="jobs"
                  style={{
                    color: "blue",
                    width: "100%",
                    wordBreak: "break-all",
                    overflowWrap: "break-word",
                    whiteSpace: "nowrap",
                  }}
                >
                  TESLA offers more Junior Developer Positions, start ASAP,
                  vacancies: 10000, location:
                  <br /> Mars{" "}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      overflowWrap: "break-word",
                      wordBreak: "break-all",
                    }}
                  >
                    We are looking for passionate Junior Developers of all kinds
                    for the next possible starting date <br />
                    to populate the Mars. Next flight: June 2022 Just click on
                    the link and you will be redirected to <br />
                    our homepage{" "}
                  </p>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Video;
