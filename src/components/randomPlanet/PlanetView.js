import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import React from 'react';

const PlanetView = ({planet}) => {
    return (
    <Card sx={ { maxWidth: 345 } }>
        <CardActionArea>
            <CardMedia
                component="img"
                height="auto"
                image={ planet.imgSrc }
                alt={ planet.name }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { planet.name }
                </Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary={ `Population: ${ planet.population }` }/>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary={ `Rotation Period: ${ planet.rotationPeriod }` }/>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary={ `Diameter: ${ planet.diameter }` }/>
                    </ListItem>
                </List>
            </CardContent>
        </CardActionArea>
    </Card>
    );
};

export default PlanetView;