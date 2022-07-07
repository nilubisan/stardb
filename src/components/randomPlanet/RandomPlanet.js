import React, { useEffect, useState } from 'react';
import {IconButton} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import { connect } from 'react-redux';
import Card from '../card/Card';
import Select from 'react-select'
import Loader from '../loader/Loader';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';
import { fetchRandomPlanet } from '../../redux/modules/randomPlanet/actions/actions';
import {getRefreshPeriodOptions, transformPeriodToPeriodOption} from "../../utils/randomPlanetUtils";
import './random-planet.css';

const RandomPlanet = ({planet, isLoading, error, fetchRandomPlanet}) => {

    const [planetInterval, setPlanetInterval] = useState(null);
    const [planetIntervalId, setPlanetIntervalId] = useState(null);

    useEffect(() => {
        fetchRandomPlanet();
    }, []);
    useEffect(() => {
        if(planetInterval) {
            console.log(planetInterval);
            const interval = setInterval(fetchRandomPlanet, planetInterval);
            setPlanetIntervalId(interval);
            return () => clearInterval(interval);
        }
    }, [planetInterval]);

    const selectOptions = getRefreshPeriodOptions([3000, 5000, 10000, 20000, 30000]);
    const onSelectChange = (selectedOptions) => {
        setPlanetInterval(selectedOptions.value);
    };
    const stopPlanetRefresh = () => {
        if(planetInterval) {
            clearInterval(+planetIntervalId);
        }
    };

    const loading = (isLoading && !error) ? <Loader/> : null
    const errorMessage = (error && !isLoading) ? <ErrorIndicator/> : null

    const planetFeaturesNamesList = {
        "Rotation period": "rotationPeriod",
        "Population": "population",
        "Diameter": "diameter"
    };

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
                            defaultValue={planetInterval ? transformPeriodToPeriodOption(planetInterval) : null}
                        >
                        </Select>
                        <IconButton aria-label="delete" sx={{ color: "#c83d3d" }} onClick={stopPlanetRefresh}>
                            <CancelIcon />
                        </IconButton>
                    </div>
                    </div>
                    <Card entity={planet} entityFeaturesNamesList={planetFeaturesNamesList} />
                </div>
           ) : null}
        </div>
    );
}

const mapStateToProps = (state) => ({
    planet: state.planet,
    isLoading: state.isLoading,
    error: state.error,
});

const mapDispatchToProps = {
    fetchRandomPlanet
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomPlanet);
