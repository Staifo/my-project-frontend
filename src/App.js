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
import { Scrollbar } from "react-scrollbars-custom";
import { useParams } from "react-router-dom";
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
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useHistory } from "react-router-dom";
import TestCard from "./testCard";
import Spinner from './spinner';
import AboutThisProject from './aboutThisProject';


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
  const [fav, setFav] = useState(null);
  const [createCard, setCreateCard] = useState(null);
  const [search, setSearch] = useState(null);
  const [userInput, setUserInput] = useState(null);
  // const [like, setLike]=useState(null);

  const history = useHistory();
  const { id } = useParams();
  const video = useRef(null);
  console.log(search);
  console.log(data);
  console.log(createCard);
  console.log(datas);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
    // if (!e.target.value) {
    //   window.location.reload();
    // }
  };

  const handleOnClick = () => {
    setSearch(userInput);
    history.push("/");
  };

  // const handleOnClick = () => {
  //   setSearch(userInput);
  //   history.push('/found')

  // }
  const cam = useRef();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const [like, setLike]=useState(null)

  // const favoriteCards = [];
  // console.log(favoriteCards)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCreateCard(e.target);
  };

 
  // const handleFav = (e) => {
  //  setFav(e);
  //  setFav(datas[0]._id)
  // }

  // const favo = fav && datas.filter(item=>{favoriteCards.push( <TestCard
  //   item={item}
  //   onChooseVideo={setChosenVideo}
  //   url={chosenVideo}
  //   handleClick={handleClick}
  // />
  //     )})

  // const handleFavorite = (e) => {
  //   setLike(e.target);
    
  // }
  console.log(data)


  // const handleFav = (e) => {
  //   setFav(e.target);

  // };
  // console.log(fav);


  useEffect(() => {
    fetch(`/api/singleUser`)
      .then((response) => response.json())
      .then((database) => setDatas(database));
  }, []);


  return (
    <div style={{ width: "100%" }}>
      <Navbar
        handleChange={handleChange}
        handleOnClick={handleOnClick}
        userInput={userInput}
        search={search}
        // like={like}
        // setLike={setLike}
        datas={datas}
      />

      <div
        className="App"
        style={{ height: "100%", width: "100%", display: "flex" }}
      >
        {!datas && <Spinner/>}
        <Switch>
          <Route exact path="/">
            <div
              ref={video}
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                position: "sticky",
                top: "0",
                marginRight: "20px",
                marginLeft: "20px",
                zIndex: "10",
              }}
            >
              {datas && <Video url={chosenVideo} />}
              
            </div>
            <div>
              <div style={{ width: "100%", zIndex: "0" }}>
                {datas && !search && (
                  <ExtractData
                    datas={datas}
                    onChooseVideo={setChosenVideo}
                    url={chosenVideo}
                    handleClick={handleClick}
                    // handleFav={handleFav}
                    // handleFavorite={handleFavorite}
                    data={data}
                    // like={like}
                    // setLike={setLike}
                  />
                )}
              </div>
              <div style={{ width: "100%", zIndex: "10" }}>
                {datas &&
                  search &&
                  datas
                    .filter((item) => {
                      return search
                        ? item.coding_skills.toLowerCase().includes(search) ||
                            item.coding_skills.toUpperCase().includes(search) ||
                            item.first_name.toLowerCase().includes(search) ||
                            item.last_name.toLowerCase().includes(search) ||
                            item.city.toLowerCase().includes(search) ||
                            item.job_title.toLowerCase().includes(search)
                        : datas;
                    })
                    .map((item) => {
                      return (
                        <div style={{ display: "flex", marginTop: "20px" }}>
                          <TestCard
                            item={item}
                            onChooseVideo={setChosenVideo}
                            url={chosenVideo}
                            handleClick={handleClick}
                          />
                        </div>
                      );
                    })}
              </div>
            </div>
          </Route>
          <Route path="/singleUser/:id?/">
            <div
              className="cardVidDivFirstApp"
              style={{
                whiteSpace: "nowrap",
                marginRight: "1%",
                marginLeft: "1%",
                width: "max-content",
              }}
            >
              <div
                className="cardVidDiv"
                style={{ width: "100%", position: "sticky", top: "0" }}
              >
                <MyPersonalSpace
                  datas={datas}
                  onChooseVideo={setChosenVideo}
                  url={chosenVideo}
                  handleClick={handleClick}
                />

                {datas && <Video url={chosenVideo} className="video1" />}
              </div>
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
            <div
              ref={cam}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <WebcamStreamCapture />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path='/aboutthisproject'>
          <AboutThisProject/>
          </Route>
        </Switch>
      </div>
      {/* { datas && datas
              .filter((item)=>{
                return search ? item.coding_skills.toLowerCase().includes(search) : data
              })
              .map((item)=>{ 
                return (
                  <div style={{width: '100%', display: 'flex'}}>
                  <Switch>
                  <Route path='/found'>
                  <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                position: "sticky",
                top: "0",
                marginRight: "20px",
                marginLeft: "20px",
                zIndex: "10",
              }}
            >
              <Video url={chosenVideo} />
            
            </div>
            <div style={{ width: "100%" }}>
              
            <TestCard
                  item={item}
                  onChooseVideo={setChosenVideo}
                  url={chosenVideo}
                  handleClick={handleClick}
                />
              
            </div>
                </Route>
                </Switch>
                </div
               
                )
                
              })

              } */}
      <Footer />
    </div>
  );
}

export default App;
