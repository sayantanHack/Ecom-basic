import React from "react";
import CardBody from './CardBody';
import {Grid } from "@material-ui/core";
import itemData from "./itemData";

function Content(){

    const CardData = itemData.map((items)=> <Grid item xs={12} sm={4} >
                <CardBody title={items.title} 
                    subtitle= {items.price}
                    avatar= {items.avatarSrc} 
                    img= {items.imgsrc} description= {items.description}
                /> 
            </Grid>
    ); 

    return (        
        <Grid container spacing={3} >
            { CardData }
        </Grid>
                    
    );
}

export default Content;