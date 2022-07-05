import React, { useState, useEffect } from "react";
import Loader from '../loader/Loader'
import swapiService from '../../services/swapiService';
import './random-planet.css';

const getRandomPlanetId = () => {
    return Math.floor(Math.random()*25) + 2;
};


const RandomPlanet = () => {
    const [planet, setPlanet] = useState({});
    const [loading, setLoading] = useState(false);
    const setRandomPlanet = () => {
        setLoading(true);
        const id = getRandomPlanetId();
        swapiService.getPlanet(id).then((planet) => {
            setPlanet(planet);
            setLoading(false);
        });
    };

    useEffect(setRandomPlanet, [setPlanet]);

    if(loading) {
        return <Loader />
    }
    if(planet.id) {
        return (
            <div className="random-planet jumbotron rounded">
                <div className="planet-image"
                     style={ { background: `url(https://starwars-visualguide.com/assets/img/planets/${ planet.id }.jpg), url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg) center center` } }/>
                <div>
                    <h4>{ planet.name }</h4>
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
                </div>
            </div>
        );
    }
    };

export default RandomPlanet;
