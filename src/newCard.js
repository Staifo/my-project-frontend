import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SettingsInputSvideo } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Video from "./video";
import PersonalSpaceCard from "./personalSpaceCard";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "345",
    maxheight: "10%",
    textAlign: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "0",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function NewCard({
  datas,
  url,
  onChooseVideo,
  data,
  userCard,
  chosenVideo,
  setChosenVideo,
  otherVideo,
  onOtherVideo,
  setOtherVideo,
  handleClick,
  handleFav,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    job_title,
    first_name,
    last_name,
    date_of_birth,
    dob,
    city,
    last_updated,
    video_url,
    video,
    profile_pic,
    street,
    postal_code,
    country,
    email,
    linkedin_url,
    github_url
  } = userCard;

  return (
    <div
      class="col-sm-4"
      className="cardSpace"
      style={{ display: "flex", width: "100%",}}
    >
      <div style={{ width: "98%" }}>
        <Card
          className={classes.root}
          id="card"
          style={{
            marginLeft: "",
            flex: "1",
            position: 'sticky',
          }}
        >
          <CardMedia
            className={classes.media}
            image={`${process.env.NODE_ENV === "production" ? process.env.REACT_APP_DEPLOYED : process.env.REACT_APP_LOCAL}/documents/${userCard.profile_pic}`}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <table style={{ textAlign: "left", marginBottom: "2%", width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ fontSize: "20px", color: "", fontFamily: 'Candara'}}>
                      {first_name}
                    </th>
                    <th style={{ fontSize: "20px", color: "", fontFamily: 'Candara' }}>{last_name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{}}>
                    <td style={{ fontSize: "20px", fontWeight: "bold", fontFamily: 'Candara' }}>
                      Job title:
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        fontSize: "20px",
                        fontWeight: "bold",
                        fontFamily: 'Candara'
                      }}
                    >
                      {job_title}
                    </td>
                  </tr>
                  {/* <tr style={{}}>
                    <td style={{ whiteSpace: "nowrap" }}>DOB:</td>
                    <td style={{ textAlign: "left", whiteSpace: "nowrap" }}>
                      {dob}
                    </td>
                  </tr> */}
                  <tr style={{}}>
                    <td style={{}}>City:</td>
                    <td style={{ textAlign: "left", whiteSpace: "nowrap", fontFamily: 'Candara' }}>
                      {city}
                    </td>
                  </tr>
                  <tr style={{}}>
                    <td style={{ whiteSpace: "nowrap" }}>Last update:</td>
                    <td style={{ textAlign: "left", whiteSpace: "nowrap", }}>
                      {last_updated}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "40%" }}
                onClick={() => {
                  onChooseVideo(video);
                  // handleExpandClick()
                }}
              >
                Play Video
              </Button>
              <Button
                onClick={handleExpandClick}
                variant="contained"
                color="primary"
              >
                More Info
              </Button>
              <Typography paragraph>
                <TwitterIcon
                  style={{
                    marginRight: "2%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                  color="primary"
                />
              </Typography>
              <Typography paragraph>
                <FacebookIcon
                  style={{
                    marginRight: "2%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                  color="primary"
                />
              </Typography>
              <Typography paragraph>
                <a href= {linkedin_url}><LinkedInIcon
                  style={{
                    marginRight: "2%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                  color="primary"
                /></a>
              </Typography>
              <Typography paragraph>
                <a href = {github_url}><GitHubIcon
                  style={{
                    marginRight: "2%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                /></a>
              </Typography>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={handleClick} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              style={{marginLeft: '60%'}}
            >
              <ExpandMoreIcon />
              <span style={{fontSize: '16px', fontFamily: 'Candara'}}>Contact Details</span>
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {/* { userCard && <Video url={chosenVideo}/>} */}
              <Typography>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <table style={{ textAlign: "left" }}>
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr rowspan="4">
                        <td>
                          <HomeIcon color="primary" />
                        </td>
                        <td>{street}</td>
                      </tr>
                      <tr>
                        <td>
                        </td>
                        <td>{postal_code} {city}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>{country}</td>
                      </tr>
                      <tr>
                        <td>
                          <MobileFriendlyIcon color="primary" />
                        </td>
                        <td>0158 / 20 20 20 20</td>
                      </tr>
                      <tr>
                        <td>
                          <MailOutlineIcon color="primary" />
                        </td>
                        <td>{email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
          {/* <div style= {{height: '20em', border: '1px solid black'}}></div> */}
        </Card>
      </div>
      {/* <div style={{ border: "4px solid yellow", height: "100%", width: '60%' }}></div> */}
    </div>

    // {/* <div
    //   style={{ display: "flex", width: "600px", border: "1px solid black",}}
    // >
    //   <div>
    //     <img src={dFood2} style={{ display: "flex", width: "200px", height: '100%' }} />
    //   </div>

    //   <div>
    //   <ul style={{ listStyleType: "none" }}>
    //     <li>Name:{datas.first_name}</li>
    //     <li>Last name: {datas.last_name}</li>
    //     <li>Name:{datas.first_name}</li>
    //     <li>Last name: {datas.last_name}</li>
    //     <li>Name:{datas.first_name}</li>
    //     <li>Last name: {datas.last_name}</li>
    //   </ul>
    //   <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
    //   <div>
    //   <button onClick={() => onChooseVideo(datas.video_url)}>
    //     Play Video
    //   </button></div>
    //   <div>
    //   <button>More Info</button></div>
    //   </div>
    //   </div>
    // </div> */}
  );
}

export default NewCard;

// import React from 'react'
// import {Link} from 'react-router-dom'

// // import 'bootstrap/dist/css/bootstrap.min.css';

// const Card = ()=>{

//    return (
//       <div>

//       </div>)

//     return (
//     <div>
//  <div class="card" style={{width: '140%'}}>
//         <div class="row no-gutters">
//             <div class="col-auto">
//                 <img src="//placehold.it/200" class="img-fluid" alt=""/>
//             </div>
//             <div class="col">
//                 <div class="card-block px-2">
//                     <h4 class="card-title">User-Name</h4>
//                     <p class="card-text">Description/Motto/Tweet of the day</p>
//                     <ol>
//                     <li>hallo</li>
//                         <li>hallo</li>
//                         <li>hallo</li>
//                         <li>hallo</li>
//                         <li>hallo</li>

//                     </ol>
//                     <Link to="/usermessages" class="btn btn-primary">See all messages of</Link>
//                 </div>
//             </div>
//         </div>
//         <div class="card-footer w-100 text-muted">
//             I love chickens...
//         </div>
//   </div>
//     </div>
//     )

// }
