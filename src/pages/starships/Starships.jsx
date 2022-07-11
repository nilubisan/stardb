import React, { useEffect } from 'react'
import './starships.css'
import Loader from '../../components/loader'
import ErrorIndicator from '../../components/errorIndicator'
import { fetchStarshipsByPageNumberRequest } from '../../redux/modules/starships/actions/actions'
import CardView from '../../components/card';
import { connect } from 'react-redux'
import Paginator from '../../components/paginator'

const Starships = ({
                     starships,
                     loading,
                     error,
                     currentPageNumber,
                     pageCount,
                     fetchStarshipsByPageNumberRequest
                 }) => {
    const loader = (loading && !error) ? <Loader/> : null
    const errorMessage = (error && !loading) ? <ErrorIndicator/> : null

    useEffect(() => {
        fetchStarshipsByPageNumberRequest(currentPageNumber);
    }, [currentPageNumber]);

    const starshipsFeatureNamesList = {
        'Crew': 'crew',
        'Max atmosphering speed': 'maxAtmospheringSpeed',
        'Cargo capacity': 'cargoCapacity',
        'Passengers': 'passengers',
    }

    const handlePageClick = (pageNumber) => {
        fetchStarshipsByPageNumberRequest(pageNumber.selected + 1);
    }

    return (
        <div className="starships__container">
            { loader }
            { errorMessage }
            { (!loading && !error && starships) ? (
                <>
                    <div className="starships">
                        {
                            starships.map((starship) => {
                                return <CardView key={ starship.name } entity={ starship }
                                                 entityFeaturesNamesList={ starshipsFeatureNamesList }
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
    console.log(state);
    return {
        starships: state.starships.starships,
        loading: state.starships.loading,
        error: state.starships.error,
        currentPageNumber: state.starships.currentPageNumber,
        pageCount: state.starships.pageCount
    }}

const mapDispatchToProps = {
    fetchStarshipsByPageNumberRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Starships)