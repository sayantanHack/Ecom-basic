import React from "react";
import CardBody from './CardBody';
import {Grid } from "@material-ui/core";

function Content(){
    return (        
        <Grid container spacing={3} >
            <Grid item xs={12} sm={4} >
                <CardBody title="Traditional Craft" 
                subtitle="INR 500" 
                avatarSrc="https://cdn.pixabay.com/photo/2017/06/23/08/13/china-2433891_960_720.png"
                imgsrc="https://images.unsplash.com/photo-1527383214149-cb7be04ae387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                description="This is a kind of Indian Hancraft Design. This made by vilage women in rural India.Tru heritage and the flavourfull rich culture can be seen here."
                />
            </Grid>
        </Grid>
    );
}

export default Content;