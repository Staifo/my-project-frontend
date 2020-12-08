import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import MyComponent from "./searchCode";
import AnimatedMulti from "./searchCode";
import AnimatedMultiSkills from "./searchSkills";
import WebcamStreamCapture from "./cam";
import async from "async";
import axios from "axios";
import FileUpload from "./fileUpload";
// import FileUploadNew from './fileUpload'
import CV from "./cv";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Info = () => {
  const classes = useStyles();
  const [camDis, setCamDis] = useState(null);
  const [userCreated, setUserCreated] = useState(false);
  const [createCard, setCreateCard] = useState(null);

  const camOn = useRef(null);
  const play = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    camOn.current.style.visibility = "visible";
    play.current.style.visibility = "hidden";
  };

  const [form, setForm] = useState(null);
  console.log(form);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    e.preventDefault();
  };

  function handleOnClick(e) {
    e.preventDefault();
    console.log('success')
    // let payload = form;
    // console.log(payload);
    // let data = new FormData();
    // data.append("json", JSON.stringify(payload));
    fetch("http://localhost:3000/singleuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    })
      .then( (res) => res.json())
      .then((data) => setUserCreated(data))
      .catch(e => console.log(e.message))
    

    //   setForm(e.target)
    //   // axios.post('http://localhost:3000/singleUser', form).then(function(req, res) {
    //   //   console.log(res)
    //   // })
    //   e.preventDefault()
    //   // useEffect( ()=>{
    //   //   const fetchData = async ()=>{
    //   //     const config = {
    //   //     method: 'post',
    //   //     url: 'http://localhost:3000/singleUsers',
    //   //     data: { 'job_title': `${form}` ,
    //   //     'first_name': `${form}` ,
    //   //     'last_name': `${form}` ,
    //   //     'email': `${form}` ,
    //   //     'dob': `${form}` ,
    //   //     'street':`${form}` ,
    //   //     'city':`${form}` ,
    //   //     'postal_code':`${form}` ,
    //   //     'province':`${form}` ,
    //   //     'country':`${form}` ,
    //   //     'github_url':`${form}` ,
    //   //     'portfolio_url':`${form}` ,
    //   //     'linkedin_url':`${form}` ,
    //   //     'xing_url': `${form}` ,
    //   //     'twitter':`${form}`
    //   //   }
    //   //     }
    //   //   await axios(config)
    //   //   }
    //   //   fetchData()

    //   // },[])

    // // try {
    // //     let result =await fetch('http://localhost:3000/singleUser', {
    // //       method: 'post',
    // //       headers: {
    // //         'Accept': 'application/json',
    // //         'Content-type': 'application/json',
    // //       },
    // //       body: JSON.stringify({
    // //         first_name: 'hallo'

    // //       })
    // //     })
    // //     console.log(result)
    // //   }catch(e) {
    // //     console.log(e)
    // //   }

    //  }

    //  useEffect( ()=>{
    //      const fetchData = async ()=>{
    //        const config = {
    //        method: 'post',
    //        url: 'http://localhost:3000/singleUsers',
    //        data: { 'job_title': `${form}` ,
    //        'first_name': `${form}` ,
    //        'last_name': `${form}` ,
    //        'email': `${form}` ,
    //        'dob': `${form}` ,
    //        'street':`${form}` ,
    //        'city':`${form}` ,
    //        'postal_code':`${form}` ,
    //        'province':`${form}` ,
    //        'country':`${form}` ,
    //        'github_url':`${form}` ,
    //        'portfolio_url':`${form}` ,
    //        'linkedin_url':`${form}` ,
    //        'xing_url': `${form}` ,
    //        'twitter':`${form}`
    //      }
    //        }
    //      await axios(config)
    //      }
    //      fetchData()

    //    },[form])
  }

  return (
    <div style={{ width: "100%", display: "flex", height: "100%" }}>
      <Grid container spacing={3} direction="row">
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {!userCreated && <form
              // action="http://localhost:3000/singleuser"
              // method="POST"
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "space-between",
              }}
              onChange={handleOnChange}
              // enctype="multipart/form-data"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "2%",
                  width: "40%",
                }}
              >
                <div>Job title</div>
                <input type="text" name="job_title" placeholder="" />

                <div>First Name</div>
                <input type="text" name="first_name" />

                <div>Last Name</div>
                <input type="text" name="last_name" />

                <div>Date of Birth</div>
                <input
                  name="dob"
                  type="date"
                  id="birthday"
                  style={{ width: "100%" }}
                />

                <div>Email</div>
                <input type="email" name="email" />

                <div>Password</div>
                <input type="password" name="password" />

                <div>Street</div>
                <input type="text" name="street" />

                <div>City</div>
                <input type="text" name="city" />

                <div>State/Province</div>
                <input type="text" name="province" />

                <div>Zip/Postal Code</div>
                <input type="text" name="postal_code" />

                <div>Country</div>
                <input type="text" name="country" />

                <div>My Portfolio Link</div>
                <input type="text" name="portfolio_url" />

                <div>GitHub Link</div>
                <input type="text" name="github_url" />

                <div>Twitter</div>
                <input type="text" name="twitter" />

                <div>LinkedIn Link</div>
                <input type="text" name="linkedin_url" />

                <div>Xing Link</div>
                <input type="text" name="xing_url" />

                <div>Upload Profile Pic</div>
                <div>
                  <FileUpload />
                </div>

                <div>Upload CV</div>
                <div>
                  <CV />
                </div>
                {/* <Button
                  // type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "2%", marginTop: "4%", width: "100%" }}
                  onClick={handleOnClick}
                >
                  Send Data
                </Button> */}
              </div>
             
             

              <div
                style={{
                  marginRight: "2%",
                  width: "38%",
                  marginLeft: "4%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", width: "100%", height: "100%" }}>
                  <div style={{ width: "46%", height: "100%" }}>
                    <div style={{ height: "80px", textAlign: "center" }}>
                      Coding Skills and Coding Related Skills
                    </div>
                    <TextareaAutosize
                      aria-label="minimum height"
                      rowsMin={16}
                      placeholder="Your skills here..."
                      style={{ width: "100%", height: "80%" }}
                      name="coding_skills"
                    />
                    <br />
                    {/* <AnimatedMulti /> */}
                  </div>
                  <br />
                  <div
                    style={{ width: "46%", height: "100%", marginLeft: "10%" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        height: "80px",
                      }}
                    >
                      Transferrable Skills and other Soft & Hard Skills (Scale 1(bad) -10(very good)) or write a short text
                    </div>
                    <TextareaAutosize
                      aria-label="minimum height"
                      rowsMin={16}
                      placeholder="Your skills here..."
                      style={{ width: "100%", height: "80%" }}
                      name="transfer_skills"
                      placeholder = 'Your skills or pitch here: for example: Communicational Skills: 10, Adaptability: 10 ...'
                    />
                    <br />
                    {/* <AnimatedMultiSkills /> */}
                  </div>
                </div>
                {/* <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "4%", width: "100%" }}
                  onClick={handleOnClick}
                >
                  Send Data
                </Button> */}
                <Button
                  // type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "2%", marginTop: "4%", width: "100%" }}
                  onClick={handleOnClick}
                >
                  Send Data
                </Button>
              </div>

              {/* <AnimatedMulti /><br/> */}
              {/* <AnimatedMultiSkills /> */}
            </form>}
          </Paper>
          {userCreated && <Grid item xs={12}>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <div
                style={{
                  width: "40%",
                  display: "flex",
                  height: '600px'
                }}
              >
                <div
                  ref={play}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    width: "100%",

                    marginLeft: "10%",
                  }}
                >
                  <div style={{ zIndex: "0" }}>
                    <PlayCircleOutlineIcon
                      onClick={handleClick}
                      color="primary"
                      style={{ fontSize: "20em" }}
                    />
                    <span>Click here and start recording your video</span>
                  </div>
                  <div
                    ref={camOn}
                    style={{
                      position: "absolute",
                      zIndex: "10",
                      textAlign: "center",
                      marginRight: "10em",
                      visibility: "hidden",
                      zIndex: "10",
                    }}
                  >
                    <WebcamStreamCapture name="video" userId={userCreated._id} />
                  </div>
                </div>
              </div>
              </div>
          </Grid>}
        </Grid>
       
      </Grid>
    </div>
  );
};

export default Info;
