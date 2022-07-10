import React, { useEffect } from 'react'
import './persons.css'
import Loader from '../loader/Loader'
import ErrorIndicator from '../errorIndicator/ErrorIndicator'
import { fetchPersonsByPageNumberRequest } from '../../redux/modules/persons/actions/actions'
import CardView from '../card/Card'
import { connect } from 'react-redux'
import Paginator from '../paginator/Paginator'

const Persons = ({
                     persons,
                     loading,
                     error,
                     currentPageNumber,
                     pageCount,
                     fetchPersonsByPageNumberRequest
                 }) => {
    const loader = (loading && !error) ? <Loader/> : null
    const errorMessage = (error && !loading) ? <ErrorIndicator/> : null

    useEffect(() => {
        fetchPersonsByPageNumberRequest(currentPageNumber)
    }, [currentPageNumber]);

    const personFeatureNamesList = {
        'Height': 'height',
        'Mass': 'mass',
        'Gender': 'gender',
        'Birth year': 'birthYear',
        'Eye color': 'eyeColor'
    }

    const handlePageClick = (pageNumber) => {
        fetchPersonsByPageNumberRequest(pageNumber.selected + 1)
    }

    return (
        <div className="persons__container">
            { loader }
            { errorMessage }
            { (!loading && !error && persons) ? (
                <>
                    <div className="persons">
                        {
                            persons.map((person) => {
                                return <CardView key={ person.name } entity={ person }
                                                 entityFeaturesNamesList={ personFeatureNamesList }
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
    return {
    persons: state.persons.persons,
    isLoading: state.persons.isLoading,
    error: state.persons.error,
    currentPageNumber: state.persons.currentPageNumber,
    pageCount: state.persons.pageCount
}}

const mapDispatchToProps = {
    fetchPersonsByPageNumberRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
