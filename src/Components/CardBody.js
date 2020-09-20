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
    const bull = <span className={classes.bullet}>•</span>;
    const {avatarSrc, title, subtitle, description, imgsrc} = props;
    return(
        <div>
            <Card>
                <CardHeader
                    avatar={
                    <Avatar src={avatarSrc} />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                    }
                    title={title}
                    subheader={subtitle}
                />
                <CardMedia style={{height: "200px"}}
                image={imgsrc} />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>
    );
}

export default CardBody;