import React, { useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import { connect } from 'react-redux'
import Card from '../../components/card'
import Select from 'react-select'
import Loader from '../../components/loader'
import ErrorIndicator from '../../components/errorIndicator'
import {
    initPromoRequest
} from '../../redux/modules/promo/actions/actions'
import {
    getRefreshPeriodOptions,
    transformPeriodToPeriodOption
} from '../../utils/randomPlanetUtils'
import './promo.css'

const Promo = ({
                   person,
                   planet,
                   starship,
                   personLoading,
                   starshipLoading,
                   planetLoading,
                   personError,
                   starshipError,
                   planetError
               }) => {
    const entities = [person, planet, starship];

    const [ promoInterval, setPromoInterval ] = useState(null);
    const [ promoIntervalId, setPromoIntervalId ] = useState(null);

    useEffect(() => {
        initPromoRequest()
    }, [])

    useEffect(() => {
        if(promoInterval) {
            const interval = setInterval(() => {
                if((!personLoading && !starshipLoading && !planetLoading)) initPromoRequest()
            }, promoInterval)
            setPromoIntervalId(interval)
            return () => clearInterval(interval)
        }
    }, [ personLoading, starshipLoading, planetLoading, promoInterval ])

    const selectOptions = getRefreshPeriodOptions([ 3000, 5000, 10000, 20000, 30000 ]);

    const onSelectChange = (selectedOptions) => {
        setPromoInterval(selectedOptions.value)
    }
    const stopPlanetRefresh = () => {
        if(promoInterval) {
            clearInterval(+promoIntervalId)
        }
    }

    const loader = ((personLoading || starshipLoading || planetLoading) && (!personError && !starshipError && !planetError)) ? <Loader/> : null;
    const errorMessage = ((personError || starshipError || planetError) && (!personLoading && !starshipLoading && !planetLoading)) ? <ErrorIndicator/> : null;

    return (
        <div className="promo__container">
            { loader }
            { errorMessage }
            { ((!personLoading && !starshipLoading && !planetLoading) && (!personError && !starshipError && !planetError) && planet.id) ? (
                <div className="promo">
                    <div className="promo__select-period">
                    <span className="promo__select-period-title">
                        Select the refresh interval for planet
                    </span>
                        <div className="promo__select-period-control">
                            <Select
                                options={ selectOptions }
                                onChange={ onSelectChange }
                                defaultValue={ promoInterval ? transformPeriodToPeriodOption(promoInterval) : null }
                            >
                            </Select>
                            <IconButton aria-label="delete" sx={ { color: '#c83d3d' } }
                                        onClick={ stopPlanetRefresh }>
                                <CancelIcon/>
                            </IconButton>
                        </div>
                    </div>
                    <div className="promo__cards-container">
                        {
                            entities.map((entity) => (
                                <Card entity={entity} cardStyles={ { maxWidth: 200, margin: 2 } }/>
                            ))
                        };
                    </div>
                </div>
            ) : null }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        person: state.persons.promoPerson,
        planet: state.persons.promoPlanet,
        starship: state.persons.promoStarship,

        personLoading: state.persons.loading,
        planetLoading: state.planets.loading,
        starshipLoading: state.starships.loading,

        personError: state.persons.error,
        planetError: state.planets.error,
        starshipError: state.starships.error,
    }
}

const mapDispatchToProps = {
    initPromoRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Promo)
