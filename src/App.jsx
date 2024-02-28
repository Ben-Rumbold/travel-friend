import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import "./App.css";

import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";
import PlaceDetails from "./components/place-details/PlaceDetails";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100vw" }}>
        <Grid className="list-grid" item xs={12} md={4}>
          <List />
        </Grid>
        <Grid className="map-grid" item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
