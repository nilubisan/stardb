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
                   planetError,
                   initPromoRequest
               }) => {
    const entities = [person, planet, starship];
    const [ promoInterval, setPromoInterval ] = useState(null);
    const [ promoIntervalId, setPromoIntervalId ] = useState(null);

    useEffect(() => {
        initPromoRequest()
    }, [initPromoRequest])

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

    const anyOfEntitiesStillLoading = (personLoading || starshipLoading || planetLoading);
    const anyOfEntitiesHasError = (personError || starshipError || planetError)
    const allEntitiesExist = (planet  && person && starship)

    const loader = ( anyOfEntitiesStillLoading && !anyOfEntitiesHasError) ? <Loader/> : null;
    const errorMessage = ( anyOfEntitiesHasError && !anyOfEntitiesStillLoading) ? <ErrorIndicator/> : null;

    return (
        <div className="promo__container">
            { loader }
            { errorMessage }
            { (!anyOfEntitiesStillLoading && !anyOfEntitiesHasError && allEntitiesExist) ? (
                <div className="promo" data-cy="promo">
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
                            entities.map((entity, i) => (
                                <Card entity={entity} key={i} cardStyles={ { maxWidth: 200, margin: 2 } }/>
                            ))
                        }
                    </div>
                </div>
            ) : null }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        person: state.promo.person,
        planet: state.promo.planet,
        starship: state.promo.starship,

        personLoading: state.promo.personLoading,
        planetLoading: state.promo.planetLoading,
        starshipLoading: state.promo.starshipLoading,

        personError: state.promo.personError,
        planetError: state.promo.planetError,
        starshipError: state.promo.starshipError,
    }
}

const mapDispatchToProps = {
    initPromoRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Promo);
