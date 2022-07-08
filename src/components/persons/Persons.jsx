import React, { useEffect } from 'react'
import './persons.css'
import Loader from '../loader/Loader'
import ErrorIndicator from '../errorIndicator/ErrorIndicator'
import { fetchPersonsByPageNumber } from '../../redux/modules/persons/actions/actions'
import CardView from '../card/Card'
import { connect } from 'react-redux'
import Paginator from '../paginator/Paginator'

const Persons = ({
                     persons,
                     isLoading,
                     error,
                     currentPage,
                     pageCount,
                     fetchPersonsByPageNumber
                 }) => {
    const loading = (isLoading && !error) ? <Loader/> : null
    const errorMessage = (error && !isLoading) ? <ErrorIndicator/> : null

    useEffect(() => {
     fetchPersonsByPageNumber(currentPage)
    }, [currentPage])
    const personFeatureNamesList = {
        'Height': 'height',
        'Mass': 'mass',
        'Gender': 'gender',
        'Birth year': 'birthYear',
        'Eye color': 'eyeColor'
    }

    const handlePageClick = (pageNumber) => {
        fetchPersonsByPageNumber(pageNumber.selected + 1)
    }

    return (
        <div className="persons__container">
            { loading }
            { errorMessage }
            { (!isLoading && !error && persons) ? (
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
                    <Paginator handlePageClick={handlePageClick} pageCount={Math.ceil(pageCount / 10)} activePageNumber={currentPage}/>
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
    currentPage: state.persons.currentPage,
    pageCount: state.persons.pageCount
}}

const mapDispatchToProps = {
    fetchPersonsByPageNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
