import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PlanetView from './PlanetView';
import Loader from '../loader/Loader';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';
import { fetchRandomPlanet } from '../../redux/reducers/randomPlanet/randomPlanetReducer';
import './random-planet.css';

const RandomPlanet = ({planet, isLoading, error, fetchRandomPlanet}) => {
    useEffect(() => {
        fetchRandomPlanet();
    }, [fetchRandomPlanet]);

    const loading = (isLoading && !error) ? <Loader/> : null
    const errorMessage = (error && !isLoading) ? <ErrorIndicator/> : null
    const content = (!isLoading && !error && planet.id) ? <PlanetView planet={ planet }/> : null

    return (
        <div className="random-planet__container">
            { loading }
            { errorMessage }
            { content }
        </div>
    );
}

const mapStateToProps = (state) => ({
    planet: state.planet,
    isLoading: state.isLoading,
    error: state.error
});


const mapDispatchToProps = {
    fetchRandomPlanet
};


export default connect(mapStateToProps, mapDispatchToProps)(RandomPlanet);
