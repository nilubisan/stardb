import React, { useEffect, useState } from 'react';
import {IconButton} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import { connect } from 'react-redux';
import Select from 'react-select'
import PlanetDetails from '../planetDetails/PlanetDetails';
import Loader from '../loader/Loader';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';
import { fetchRandomPlanet, setRerenderPeriod } from '../../redux/reducers/randomPlanet/randomPlanetReducer'
import {getRefreshPeriodOptions, transformPeriodToPeriodOption} from "../../utils/randomPlanetUtils";
import './random-planet.css';

const RandomPlanet = ({planet, isLoading, error, fetchRandomPlanet, setRerenderPeriod, rerenderInterval}) => {

    const [planetInterval, setPlanetInterval] = useState(rerenderInterval);

    useEffect(() => {
        fetchRandomPlanet();
    }, [fetchRandomPlanet]);

    useEffect(() => {
        if(rerenderInterval) {
            const interval = setInterval(fetchRandomPlanet, rerenderInterval);
            setPlanetInterval(interval);
            return () => clearInterval(interval);
        }
    }, [rerenderInterval]);

    const selectOptions = getRefreshPeriodOptions([3000, 5000, 10000, 20000, 30000]);

    const onSelectChange = (selectedOptions) => {
        setRerenderPeriod(selectedOptions.value);
    }

    const stopPlanetRefresh = () => {
        if(planetInterval) {
            clearInterval(planetInterval);
        }
    }

    const loading = (isLoading && !error) ? <Loader/> : null
    const errorMessage = (error && !isLoading) ? <ErrorIndicator/> : null
    
    return (
        <div className="random-planet__container">
            { loading }
            { errorMessage }
            { (!isLoading && !error && planet.id) ? (
                <div className="random-planet">
                <div className='select-random-planet'>
                    <span className="select-random-planet__title">
                        Select the refresh interval for planet
                    </span>
                    <div className="select-random-planet__control">
                        <Select
                            options={selectOptions}
                            onChange={onSelectChange}
                            defaultValue={rerenderInterval ? transformPeriodToPeriodOption(rerenderInterval) : null}
                        >
                        </Select>
                        <IconButton aria-label="delete" sx={{ color: "#c83d3d" }} onClick={stopPlanetRefresh}>
                            <CancelIcon />
                        </IconButton>
                    </div>
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
