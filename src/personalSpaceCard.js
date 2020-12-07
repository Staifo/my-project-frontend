import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FileUpload from './fileUpload'

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

const PersonalSpaceCard = ({skillDiv}) => {
  const classes = useStyles();
console.log(skillDiv)


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
      } = skillDiv;
    


  return (
    <div
      className={classes.root}
      style={{ marginTop: "1%", width: '100%', marginLeft: '1.5%', marginRight:'2%'}}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{ wordBreak: "break-all" }}>
            <span style={{fontWeight: 'bold', fontSize: '20px'}}>Coding Skills & Coding Related Skills</span>
            <div>
              <table>
                <tr>
                  <td></td>
                  <td>{coding_skills}</td>
                </tr>
              </table>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{ wordBreak: "break-all" }}>
           <span style={{fontWeight: 'bold', fontSize: '20px'}}>Transferrable Skills and other Hard & Soft Skills</span>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ wordBreak: "break-all", width: '100%' }}>
           {/* <FileUpload/> */}
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
