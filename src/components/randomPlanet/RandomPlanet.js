import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select'
import PlanetDetails from '../planetDetails/PlanetDetails';
import Loader from '../loader/Loader';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';
import { fetchRandomPlanet, setRerenderPeriod } from '../../redux/reducers/randomPlanet/randomPlanetReducer';
import './random-planet.css';


const RandomPlanet = ({planet, isLoading, error, fetchRandomPlanet, setRerenderPeriod, rerenderInterval}) => {
    useEffect(() => {
        fetchRandomPlanet();
    }, [fetchRandomPlanet]);

    useEffect(() => {
        if(rerenderInterval) {
            setInterval(fetchRandomPlanet, rerenderInterval)
        }
    }, []);
    console.log(planet);
    const selectOptions = [
        {value: 5, label: "5 sec"},
        {value: 10, label: "10 sec"},
        {value: 20, label: "20 sec"},
        {value: 30, label: "30 sec"},
    ]

    const onSelectChange = (selectedOptions) => {
        setRerenderPeriod(+selectedOptions.value*1000);
    }

    const loading = (isLoading && !error) ? <Loader/> : null
    const errorMessage = (error && !isLoading) ? <ErrorIndicator/> : null
    
    return (
        <div className="random-planet__container">
            { loading }
            { errorMessage }
            { (!isLoading && !error && planet.id) ? (
                <div className="random-planet">
                <div className='select-area'>
                    <span>
                        Choose the interval for planet to be randomly shown 
                    </span>
                    <Select 
                    options={selectOptions}
                    onChange={onSelectChange}
                    >
                        </Select>
                    </div>
                    <PlanetDetails planet={ planet }/>
                </div>
           ) : null}
        </div>
    );
}

const mapStateToProps = (state) => ({
    planet: state.planet,
    isLoading: state.isLoading,
    error: state.error,
    rerenderInterval: state.rerenderInterval
});

const mapDispatchToProps = {
    fetchRandomPlanet,
    setRerenderPeriod
};


export default connect(mapStateToProps, mapDispatchToProps)(RandomPlanet);
