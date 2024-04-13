// import React from 'react'

// function profiel() {
//   return (

//     <div>

//         <div>  Dashbord</div>
//         <div>Add Candidate</div>
//          <div>Assignment Dashboard</div>
//          <div>My Timesheet</div>
//          <div>Approve TimeSheet</div>
//          <div>Login to HRMS </div>
//     </div>
//   )
// }

// export default profiel

import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Profiel() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper",  marginTop : '57px'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
   
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="dashboard" />
      </ListItemButton>
   
      <ListItemButton>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Candidate" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Assignment Dashboard" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <AssignmentTurnedInIcon/>
     
        </ListItemIcon>
        <ListItemText primary="My Timesheet" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText primary="Approve TimeSheet" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Login to HRMS" />
      </ListItemButton>
    </List>
  );
}
