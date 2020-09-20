import React from "react";
import CardBody from './CardBody';
import {Grid } from "@material-ui/core";

function Content(){
    return (        
        <Grid container spacing={3} >
            <Grid item xs={12} sm={4} >
                <CardBody title={"Product Name"} subtitle={"INR 500"} />
            </Grid>
        </Grid>
    );
}

export default Content;