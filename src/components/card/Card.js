import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CardView = ({ entity, entityFeaturesNamesList, }) => {
    console.log(entity);
    return (
        <Card sx={ { maxWidth: 345 } }>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="auto"
                    image={ entity.imgSrc }
                    alt={ entity.name }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { entity.name }
                    </Typography>
                    <List>
                        {
                            Object.keys(entityFeaturesNamesList).map((prop) => {
                                return (
                                    <ListItem key={prop} disablePadding>
                                        <ListItemText primary={ `${prop}: ${ entity[entityFeaturesNamesList[prop]] }` }/>
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardView;
