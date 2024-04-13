import React from 'react'
import SearchBar from './searchBar '
import { useState } from 'react'
import namesData  from "./name.json";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function Search() {
  const [search, setSearch] = useState("")
    console.log(search);
 
 
  return (
    <>
    <div><SearchBar setSearch={setSearch}/></div>
    <div>
        <ul>
  {namesData.filter(name=>name.name.toLocaleLowerCase().includes(search)).map((name, index) => (
    <List
    sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    component="nav"
    aria-labelledby="nested-list-subheader" key={index}
 
  >
    <ListItemButton>
    <ListItemAvatar>
          <Avatar>
          
          </Avatar>
        </ListItemAvatar>
      {name.name}
    </ListItemButton>
    </List>
  ))}
</ul>


    </div>
    </>
    

  )
}

export default Search