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
           
          <Grid item xs={0} sm={2} />      {/*Initial spaces for margin area */}
           <Grid item xs={12} sm={8}>       {/* The main content sectionextra small in 12 small is in 8 margin as 8+4=12 */}
              <Content />
           </Grid> 
           <Grid item xs={0} sm={2} />      {/*Initial spaces for margin area */}
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
