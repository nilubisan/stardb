import React, { useEffect, useState } from 'react';
import {IconButton} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import { connect } from 'react-redux';
import Card from '../../components/card';
import Select from 'react-select';
import Loader from '../../components/loader';
import ErrorIndicator from '../../components/errorIndicator';
import { fetchRandomPlanetRequest } from '../../redux/modules/randomPlanet/actions/actions';
import {getRefreshPeriodOptions, transformPeriodToPeriodOption} from "../../utils/randomPlanetUtils";
import './random-planet.css';

const RandomPlanet = ({planet, loading, error, fetchRandomPlanetRequest}) => {

    const [planetInterval, setPlanetInterval] = useState(null);
    const [planetIntervalId, setPlanetIntervalId] = useState(null);

    useEffect(() => {
        fetchRandomPlanetRequest();
    }, []);
    useEffect(() => {
        if(planetInterval) {
            const interval = setInterval(fetchRandomPlanetRequest, planetInterval);
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

    const loader = (loading && !error) ? <Loader/> : null
    const errorMessage = (error && !loading) ? <ErrorIndicator/> : null

    const planetFeaturesNamesList = {
        "Rotation period": "rotationPeriod",
        "Population": "population",
        "Diameter": "diameter"
    };

    return (
        <div className="random-planet__container">
            { loader }
            { errorMessage }
            { (!loading && !error && planet.id) ? (
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
};

const mapStateToProps = (state) => {
    return {
    planet: state.randomPlanet.planet,
    loading: state.randomPlanet.loading,
    error: state.randomPlanet.error,
}
};

const mapDispatchToProps = {
    fetchRandomPlanetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomPlanet);
