import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import Grid from "@mui/material/Grid";
import NotificationsIcon from '@mui/icons-material/Notifications';

function mainProfil() {
  return (
    <div> 
        
        <Grid container>
  <Grid  xs={2} >
  <Person2Icon/> 
  </Grid>
  <Grid item xs={7}>
   Good Morning <div></div>
   VVS Rohith
   {/* <h5> Good Morning</h5>
   <h6> VVS Rohith </h6> */}
  </Grid>
  <Grid item xs={2}>
  <NotificationsIcon/>
  </Grid>

</Grid>
       
        
        
        </div>
  )
}

export default mainProfil