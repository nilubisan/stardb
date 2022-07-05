import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
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

    if(loading) {
        return <Loader/>
    }

    if(planet.id) {
        return (
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
                            <Typography variant="body2" color="text.secondary">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="term">Population: </span>
                                        <span>{ planet.population }</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="term">Rotation Period: </span>
                                        <span>{ planet.rotationPeriod }</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="term">Diameter: </span>
                                        <span>{ planet.diameter }</span>
                                    </li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}

export default RandomPlanet
