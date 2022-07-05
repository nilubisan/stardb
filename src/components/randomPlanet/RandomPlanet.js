import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PlanetView from './PlanetView'
import Loader from '../loader/Loader'
import ErrorIndicator from '../errorIndicator/ErrorIndicator'
import swapiService from '../../services/swapiService'
import { getRandomPlanetId } from '../../utils/utils'
import { setIsLoading, setError, setPlanet } from '../../redux/reducers/randomPlanet/randomPlanetReducer'
import './random-planet.css'

const RandomPlanet = ({planet, isLoading, error, setIsLoading, setError, setPlanet}) => {

    const setRandomPlanet = () => {
        setIsLoading(true);
        const id = getRandomPlanetId();
        swapiService.getPlanet(id).then((planet) => {
            setPlanet(planet)
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false);
            setError(error);
        })
    };

    useEffect(setRandomPlanet, [ setPlanet ])

    const loading = (isLoading && !error) ? <Loader/> : null
    const errorMessage = (error && !isLoading) ? <ErrorIndicator/> : null
    const content = (!isLoading && !error && planet.id) ? <PlanetView planet={ planet }/> : null
    console.log(planet)

    return (
        <div className="random-planet__container">
            { loading }
            { errorMessage }
            { content }
        </div>
    )
}

const mapStateToProps = (state) => ({
    planet: state.planet,
    isLoading: state.isLoading,
    error: state.error
});

const mapDispatchToProps = (dispatch) => ({
    setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading)),
    setError: (error) => dispatch(setError(error)),
    setPlanet: (planet) => dispatch(setPlanet(planet))
})

const connectedRandomPlanet = connect(mapStateToProps, mapDispatchToProps)(RandomPlanet)

export default connectedRandomPlanet;
