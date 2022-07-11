import React, { useEffect } from 'react'
import './planets.css'
import Loader from '../../components/loader'
import ErrorIndicator from '../../components/errorIndicator'
import { fetchPlanetsByPageNumberRequest } from '../../redux/modules/planets/actions/actions'
import CardView from '../../components/card';
import { connect } from 'react-redux'
import Paginator from '../../components/paginator'

const Planets = ({
                     planets,
                     loading,
                     error,
                     currentPageNumber,
                     pageCount,
                     fetchPlanetsByPageNumberRequest
                 }) => {
    const loader = (loading && !error) ? <Loader/> : null
    const errorMessage = (error && !loading) ? <ErrorIndicator/> : null

    useEffect(() => {
        fetchPlanetsByPageNumberRequest(currentPageNumber)
    }, [currentPageNumber]);

    const planetFeaturesNamesList = {
        "Rotation period": "rotationPeriod",
        "Population": "population",
        "Diameter": "diameter"
    };

    const handlePageClick = (pageNumber) => {
        fetchPlanetsByPageNumberRequest(pageNumber.selected + 1);
    }

    return (
        <div className="planets__container">
            { loader }
            { errorMessage }
            { (!loading && !error && planets) ? (
                <>
                    <div className="planets">
                        {
                            planets.map((planet) => {
                                return <CardView key={ planet.name } entity={ planet }
                                                 entityFeaturesNamesList={ planetFeaturesNamesList }
                                                 cardStyles={ { maxWidth: 200, margin: 2 } }/>
                            })
                        }
                    </div>
                    <Paginator handlePageClick={handlePageClick} pageCount={Math.ceil(pageCount / 10)} activePageNumber={currentPageNumber}/>
                </>
            ) : null }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
    planets: state.planets.planets,
    loading: state.planets.loading,
    error: state.planets.error,
    currentPageNumber: state.planets.currentPageNumber,
    pageCount: state.planets.pageCount
}}

const mapDispatchToProps = {
    fetchPlanetsByPageNumberRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets)
