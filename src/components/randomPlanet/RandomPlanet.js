import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Loader from '../loader/Loader'
import swapiService from '../../services/swapiService';
import {getRandomPlanetId} from '../../utils/utils';
import './random-planet.css'

const RandomPlanet = () => {
    const [ planet, setPlanet ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const setRandomPlanet = () => {
        setLoading(true)
        const id = getRandomPlanetId()
        swapiService.getPlanet(id).then((planet) => {
            setPlanet(planet)
            setLoading(false)
        })
    }

    useEffect(setRandomPlanet, [ setPlanet ])

    return (
        <div className="random-planet__container">
            { loading ? (
                <Loader/>
            ) : planet.id ? (
                    <div className="random-planet__container">
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
                                            <ListItemText primary ={`Population: ${ planet.population }`} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText primary={`Rotation Period: ${ planet.rotationPeriod }`} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText primary={`Diameter: ${ planet.diameter }`} />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
            ) : null}
        </div>
    )
}

export default RandomPlanet
