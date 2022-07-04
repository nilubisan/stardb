import React, { useState, useEffect } from "react";
import Loader from '../loader/Loader'
import SwapiService from '../../services/swapiService';
import './random-planet.css';

const RandomPlanet = () => {
    const [planet, setPlanet] = useState({});
    const [loading, setLoading] = useState(false);
    const swapiService = new SwapiService();
    const setRandomPlanet = () => {
        setLoading(true);
        const id = Math.floor(Math.random()*25) + 2;
        swapiService.getPlanet(id).then((planet) => {
            setLoading(false);
            setPlanet(planet);
        });
    }
    useEffect(setRandomPlanet, [swapiService]);
    const {id, name, population, rotationPeriod, diameter} = planet;
    if(loading) return <Loader />
    return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period: </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter: </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    };

export default RandomPlanet;
