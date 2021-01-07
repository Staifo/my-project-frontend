import React, {useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FileUpload from "./fileUpload";
import PDF from "./pdf";


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

const PersonalSpaceCard = ({ skillDiv }) => {
  const classes = useStyles();
  console.log(skillDiv);
  const pdf = useRef(null);

  const handleClick = () => {

    window.print();
  }

  const {
    job_title,
    first_name,
    last_name,
    date_of_birth,
    dob,
    city,
    last_updated,
    id,
    video,
    _id,
    coding_skills,
    transfer_skills,
    CV,
  } = skillDiv;

  return (
    <div
      className={classes.root}
      style={{
        marginTop: "1%",
        width: "100%",
        marginLeft: "1.5%",
        marginRight: "2%",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{ 
              // wordBreak: "break-all", 
              height: "400px" }}
          >
            <Paper>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                Coding Skills & Coding Related Skills
              </span>
            </Paper>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <table>
                <tr style={{}}>
                  <td style={{}}>{coding_skills}</td>
                </tr>
              </table>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{
              // wordBreak: "break-all",
              height: "400px",
              textAlign: "center",
            }}
          >
            <Paper>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                Transferrable Skills and other Hard & Soft Skills or short text
              </span><br/>
              <span style={{ marginLeft: "4%", color: "lightgrey" }}>
                Scale: 1 -10
              </span>
            </Paper>
            <div
              style={{
                marginTop: "2%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <table>
                <tr style={{}}>
                  <td style={{}}>{transfer_skills}</td>
                </tr>
              </table>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ height: "100%" }}>
          <Paper
            className={classes.paper}
            style={{
              wordBreak: "break-all",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <div ref={pdf} style={{ height: "100%"}}>
            
            
              <PDF CV={CV}/>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
//         <div style={{width:'100%'}}>
// <div style={{border: '1px solid green', height: '100%', width: '20%' }}></div>
//         </div>

export default PersonalSpaceCard;
