import React from "react";
import {Card, CardHeader, Avatar,IconButton, CardContent, Typography, CardActions, Button, CardMedia} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
  });

function CardBody(props){

    const classes = useStyles();
    const {avatar, title, subtitle, description, img} = props;
    return(
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar src={avatar} />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <ShareIcon />
                        </IconButton>
                    }
                    title={title}
                    subheader={subtitle}
                />
                <CardMedia style={{height: "200px"}} image={img} />

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Buy Now</Button>
                    <Button size="small">Add to Cart</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default CardBody;