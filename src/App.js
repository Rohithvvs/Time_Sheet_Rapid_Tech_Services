import logo from "./logo.svg";
import "./App.css";
import Profiel from "./profiel";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Search from "./Search";
import Grid from "@mui/material/Grid";
import OverView_TimeSheeet from "./overView_TimeSheeet";
import BasicTable from "./Table";
import MainProfil from "./mainProfil";

function App() {
  return (
    <Grid container style={{ paddingLeft: "10px" }}>
      <Grid item lg={2}>
        <Profiel />
      </Grid>

      <Grid item lg={10}>
      <Grid container>
      <Grid item lg={2}><h3>Time Sheet</h3></Grid>
              <Grid lg={7}>   </Grid>
              <Grid item lg={3}> <MainProfil/>
               </Grid>
      </Grid>
        <Grid container>
          <Grid item lg={10}>
            <OverView_TimeSheeet />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={3}>
            <Search />
          </Grid>
          <Grid item lg={8.8}>
            <BasicTable />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
