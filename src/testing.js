// import React, { useState, useRef} from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { SettingsInputSvideo } from "@material-ui/icons";
// import { Grid } from "@material-ui/core";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "@material-ui/core/Button";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: "345",
//     maxheight: "10%",
//     textAlign: "center",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "0",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// function Test({
//   datas,
//   url,
//   onChooseVideo,
//   data,
//   onChoosePersonalSpace,
//   userCard,
//   handleClick,
//   handleFav,
//   handleFavorite
// })

// {
//   console.log(data);
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);
// //   const [like, setLike] =useState(null);
//   const history = useHistory();
//   const favorite = useRef(null);
//   // const button=useRef(null)
//   // const [status, setStatus]=useState(null)
// //   console.log(like);




//   const favCard = [];


//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const handleOnClick = (e) => {
//     history.push(`/singleUser/${_id}`);
//     window.location.reload();
//   };

// //   const handleFavorite = (e) => {
// //     setLike(e.target);
// //     favorite.current.style.color = 'red';
  
// //   }
  
//   // const handleFavoriteNew = () => {
//   //   setLike(null)
//   //   // history.push(`/singleUser/${_id}`);
//   // }



// // const favC = like && favCard.push('hallo')

//   const {
//     job_title,
//     first_name,
//     last_name,
//     dob,
//     city,
//     last_updated,
//     id,
//     video,
//     _id,
//     coding_skills,
//     transfer_skills,
//     profile_pic,
//     linkedin_url,
//     github_url,
//   } = datas;

// //   console.log(data);

 
  

 
//   return (
//     <div
//       class="col-sm-4"
//       className="cardSpace"
//       style={{ marginLeft: "20px", marginTop: "20px" }}
//     >
//       <Card className={classes.root} id="card" style={{}}>
//         <CardMedia
//           className={classes.media}
//           image={`${
//             process.env.NODE_ENV === "production"
//               ? process.env.REACT_APP_DEPLOYED
//               : process.env.REACT_APP_LOCAL
//           }/documents/${datas.profile_pic}`}
//         />

//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             <table
//               style={{ textAlign: "left", marginBottom: "2%", width: "100%" }}
//             >
//               <thead>
//                 <tr>
//                   <th
//                     style={{
//                       fontSize: "18px",
//                       color: "",
//                       fontFamily: "Candara",
//                     }}
//                   >
//                     {first_name}{" "}
//                   </th>
//                   <th
//                     style={{
//                       fontSize: "18px",
//                       color: "",
//                       fontFamily: "Candara",
//                     }}
//                   >
//                     {last_name}{" "}

//                  {/* {!like && <span style={{}}> */}
//                       <IconButton
//                         aria-label="add to favorites"
//                         onClick={handleFav}
//                         style={{color: 'grey'}}
//                       >
//                         <FavoriteIcon  onClick={handleFavorite}
//                         ref={favorite}/>
//                       </IconButton>
//                     {/* </span>} */}
//                     {/* {like && <div style={{}}><OneCard data={data}/></div>} */}
//                     {/* {like && <span style={{}}>
//                       <IconButton
//                         aria-label="add to favorites"
//                         onClick={handleFav}
//                         style={{color: 'red'}}
//                       >
//                         <FavoriteIcon  onClick={handleFavoriteNew}
//                         ref={favorite}/>
//                       </IconButton>
//                     </span>} */}
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr style={{}}>
//                   <td
//                     style={{
//                       fontSize: "14px",
//                       fontWeight: "bold",
//                       fontFamily: "Candara",
//                     }}
//                   >
//                     Job title:
//                   </td>
//                   <td
//                     style={{
//                       textAlign: "left",
//                       fontWeight: "bold",
//                       fontSize: "14px",
//                       fontFamily: "Candara",
//                     }}
//                   >
//                     {job_title}
//                   </td>
//                 </tr>
               
//                 <tr style={{}}>
//                   <td style={{}}>City:</td>
//                   <td
//                     style={{
//                       textAlign: "left",
//                       whiteSpace: "nowrap",
//                       fontFamily: "Candara",
//                     }}
//                   >
//                     {city}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table style={{ width: "100%" }}>
//               <thead>
//                 <tr style={{}}>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr
//                   className="table"
//                   colspan="2"
//                   style={{ textAlign: "center", width: "100%" }}
//                 >
//                   <td
//                     colspan="2"
//                     style={{
//                       textAlign: "center",
//                       fontWeight: "bold",
//                       fontFamily: "Candara",
//                       width: "100%",
//                     }}
//                   >
//                     {coding_skills}
//                   </td>
//                 </tr>
//                 <br />
//                 <tr style={{}}>
//                   <td style={{ textAlign: "left", whiteSpace: "nowrap" }}></td>
//                 </tr>
//               </tbody>
//             </table>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 justifyContent: "space-around",
//                 zIndex: "0",
//               }}
//             >
//               <Button
//                 variant="contained"
//                 color="primary"
//                 style={{ marginTop: "2%" }}
//                 onClick={(e) => {
//                   onChooseVideo(datas.video);
//                   e.preventDefault();
//                 }}
//               >
//                 Play Video
//               </Button>
              
//               <Button
//                 variant="contained"
//                 color="primary"
//                 style={{ marginTop: "2%", marginLeft: "1%" }}
//                 onClick={handleOnClick}
//               >
//                 More Info
//               </Button>
//             </div>
           
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               width: "100%",
//             }}
//           >
//             <Typography paragraph style={{}}>
//               <TwitterIcon
//                 style={{
//                   marginRight: "2%",
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   marginBottom: "1%",
//                 }}
//                 color="primary"
//               />
//             </Typography>
//             <Typography paragraph style={{}}>
//               <FacebookIcon
//                 style={{
//                   marginRight: "2%",
//                   marginTop: "1%",
//                   marginBottom: "1%",
//                 }}
//                 color="primary"
//               />
//             </Typography>
//             <Typography paragraph style={{}}>
//               <a href={linkedin_url} target='_blanc'>
//                 <LinkedInIcon
//                 className='linkedin'
//                   style={{
//                     marginRight: "2%",
//                     marginTop: "1%",
//                     marginBottom: "1%",
//                   }}
//                   color="primary"
//                 />
//               </a>
//             </Typography>
//             <Typography paragraph>
//               <a href={github_url} target='_blanc'>
//                 <GitHubIcon
//                   color="primary"
//                   style={{
//                     // marginRight: "2%",
//                     marginTop: "1%",
//                     marginBottom: "1%",
//                   }}
//                 />
//               </a>
//             </Typography>
         
//           </div>
//         </CardActions>
       
//       </Card>
    
//     </div>

    
//   );
// }

// export default Test;


