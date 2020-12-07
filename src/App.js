import React from "react";
import "./App.css";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Video from "./video";
import { Player, ControlBar } from "video-react";
import OneCard from "./card";
import ExtractData from "./extractData";
import Navbar from "./navbar";
import MyPersonalSpace from "./myPersonalSpace";
import "bootstrap/dist/css/bootstrap.min.css";
import WebcamStreamCapture from "./cam";
import { useRef } from "react";

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
import Button from "@material-ui/core/Button";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PersonalSpaceCard from "./personalSpaceCard";
import Footer from "./footer";
import PersonalSpaceUseEffect from "./personalSpaceCardUseEffect";
import Login from "./login";
import Info from "./info";
import NewCard from "./newCard";


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

function App() {
  const [datas, setDatas] = useState(null);
  const [data, setData] = useState(null);
  const [chosenVideo, setChosenVideo] = useState(null);
  const [personalSpace, setPersonalSpace] = useState(null);
  const [otherVideo, setOtherVideo] = useState(null);
  const [fav, setFav]=useState(null);
  const [createCard, setCreateCard] =useState(null);
  console.log(createCard)

  const cam = useRef();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const [oneCard, setOneCard]=useState(null);
  // const [id, setId]=useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(datas);

  useEffect(() => {
    fetch("http://localhost:3000/singleUser")
      .then((response) => response.json())
      .then((database) => setDatas(database));
  }, []);
  
const handleClick =(e) => {
  e.preventDefault();
 setCreateCard(e.target)

} 


  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div
        className="App"
        style={{ height: "100%", width: "100%", display: "flex" }}
      >
        <Switch>
          <Route exact path="/">
          <div style={{display: 'flex', flexDirection: 'column', position: 'sticky', top: '0'}}>
            {datas && <Video url={chosenVideo}/>}
          <div>
            {createCard && <MyPersonalSpace/>}
          </div>
            </div>

            {datas && (
              <ExtractData
                datas={datas}
                onChooseVideo={setChosenVideo}
                url={chosenVideo}
                handleClick={handleClick}
              
                
                
              />
            )}
           
          </Route>
          <Route path="/singleUser/:id?/">
            <div
              style={{
                whiteSpace: "nowrap",
                marginRight: "1%",
                marginLeft: "1%",
                width: 'max-content'
                
              }}
            >
            
              <MyPersonalSpace
                datas={datas}
                onChooseVideo={setChosenVideo}
                url={chosenVideo}
               handleClick={handleClick}
               
              />
              {datas && <Video url={chosenVideo} className="video1" />}
              </div>
            
            <PersonalSpaceUseEffect datas={datas} />

            {/* <CardActions disableSpacing>
             <PlayCircleOutlineIcon  onClick ={()=>handleExpandClick()} color = 'primary' fontSize="large"/>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                style={{visibility: 'hidden'}}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>{datas && <Video url={chosenVideo} />}</CardContent>
            </Collapse> */}

            {/* <MyPersonalSpace
              datas={datas}
              onChooseVideo={setChosenVideo}
              url={chosenVideo}
            /> */}
          </Route>
          <Route path="/cam">
            <div ref={cam} style={{display: 'flex', justifyContent: 'center', border: '2px solid yellow'}}>
              <WebcamStreamCapture />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
