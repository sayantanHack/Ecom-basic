import React from 'react';
import './App.css';
import SearchAppBar from './Components/AppBar';
import {Grid} from "@material-ui/core";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <SearchAppBar />      
      <Grid container direction ="column" >
        
        <Grid item container>
           
           <Grid item xs={0} sm={2} />
           <Grid item xs={12} sm={8}>
              <Content />
           </Grid> 
           <Grid item xs={0} sm={2} />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
