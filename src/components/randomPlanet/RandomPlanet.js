import React, { useEffect, useState } from 'react';
import PlanetView from './PlanetView';
import Loader from '../loader/Loader';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';
import swapiService from '../../services/swapiService';
import {getRandomPlanetId} from '../../utils/utils';
import './random-planet.css';

const RandomPlanet = () => {
    const [ planet, setPlanet ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [isError, setIsError] = useState(null);
    const setRandomPlanet = () => {
        setIsLoading(true)
        const id = getRandomPlanetId();
        swapiService.getPlanet(id).then((planet) => {
            setPlanet(planet)
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false);
            setIsError(error.name);
            console.log(error);
        })
    };

    useEffect(setRandomPlanet, [ setPlanet ]);

    const loading = (isLoading && !isError) ? <Loader /> : null;
    const error = (isError && !isLoading) ? <ErrorIndicator /> : null;
    const content = (!isLoading && !isError && planet.id) ? <PlanetView planet={planet} /> : null

    return (
        <div className="random-planet__container">
            {loading}
            {error}
            {content}
        </div>
    );
}

export default RandomPlanet
