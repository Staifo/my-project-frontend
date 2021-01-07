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
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

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

function TestCard({
  datas,
  url,
  onChooseVideo,
  data,
  onChoosePersonalSpace,
  userCard,
  handleClick,
  item
}) {
  console.log(data);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOnClick = () => {
    history.push(`/singleUser/${_id}`)
  }

  const {
    job_title,
    first_name,
    last_name,
    dob,
    city,
    last_updated,
    id,
    video,
    _id,
    coding_skills,
    transfer_skills,
    profile_pic,
    linkedin_url,
    github_url,
  } = item;

  console.log(data);

  //   import { eoLocale } from 'date-fns/locale/eo'
  // var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
  //   locale: eoLocale

  return (
    <div style={{display: 'flex', width: '100%'}}>
      <Card
        className={classes.root}
       
        style={{
          width: '100%',
          width: '100%'
        }}
      >
        <CardMedia
          className={classes.media}
          image={`${
            process.env.NODE_ENV === "production"
              ? process.env.REACT_APP_DEPLOYED
              : process.env.REACT_APP_LOCAL
          }/documents/${item.profile_pic}`}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <table
              style={{ textAlign: "left", marginBottom: "2%", width: "100%" }}
            >
              <thead>
                <tr>
                  <th style={{ fontSize: "18px", color: "", fontFamily: 'Candara' }}>{first_name}</th>
                  <th style={{ fontSize: "18px", color: "", fontFamily: 'Candara' }}>{last_name}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{}}>
                  <td style={{ fontSize: "14px", fontWeight: "bold", fontFamily: 'Candara' }}>
                    Job title:
                  </td>
                  <td
                    style={{
                      textAlign: "left",
                      fontWeight: "bold",
                      fontSize: "14px",
                      fontFamily: 'Candara',
                    
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
                  <td style={{ textAlign: "left", whiteSpace: "nowrap", fontFamily: 'Candara'}}>
                    {city}
                  </td>
                </tr>
              </tbody>
            </table>
            <table style={{width: '100%'}}>
              <thead>
                <tr style={{}}>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className = 'table' colspan="2" style={{ textAlign: "center", width: '100%'}}>
                  <td
                    colspan="2"
                    style={{ textAlign: "center", fontWeight: "bold", fontFamily: 'Candara', width: '100%'}}
                  >
                    {coding_skills}
                  </td>
                </tr>
                <br />
                <tr style={{}}>
                  <td style={{ textAlign: "left", whiteSpace: "nowrap" }}>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around', zIndex:'0'}}>
            <Button
              variant="contained"
              color="primary"
              style={{marginTop: "2%",}}
              onClick={(e) => {
                onChooseVideo(item.video);
                e.preventDefault();
              }}
            >
              Play Video
            </Button>
            {/* <Link to={`/singleUser/${_id}`} style={{ textDecoration: "none" }}> */}
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "2%", marginLeft: "1%" }}
                onClick={handleOnClick}
              >
                More Info
              </Button>
              </div>
            {/* </Link> */}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
       <Typography paragraph style={{}}>
              <TwitterIcon
                style={{
                  marginRight: "2%",
                  marginLeft: '1%',
                  marginTop: "1%",
                  marginBottom: "1%",
                }}
                color="primary"
              />
        </Typography>
           <Typography paragraph style={{}}>
              <FacebookIcon
                style={{
                  marginRight: "2%",
                  marginTop: "1%",
                  marginBottom: "1%",
                }}
                color="primary"
              />
          </Typography>
           <Typography paragraph style={{}}>
              <a href={linkedin_url}>
                <LinkedInIcon
                  style={{
                    marginRight: "2%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                  color="primary"
                />
              </a>
          </Typography>
           <Typography paragraph>
              <a href={github_url}>
                <GitHubIcon color="primary"
                  style={{
                    // marginRight: "2%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                />
              </a>
          </Typography>
          {/* <IconButton aria-label="add to favorites" onClick={handleClick}>
            <FavoriteIcon />
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
          >
            <ExpandMoreIcon />
            <span style={{ fontSize: "10px" }}>
              click here for important links
            </span>
          </IconButton> */}
          </div>
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
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
              <a href={linkedin_url}>
                <LinkedInIcon
                  style={{
                    marginRight: "2%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                  color="primary"
                />
              </a>
            </Typography>
            <Typography paragraph>
              <a href={github_url}>
                <GitHubIcon
                  style={{
                    marginRight: "2%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                />
              </a>
            </Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    </div>

   
  );
}

export default TestCard;


