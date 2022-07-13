import React, { useEffect } from 'react'
import './persons.css'
import Loader from '../../components/loader'
import ErrorIndicator from '../../components/errorIndicator'
import { fetchPersonsByPageNumberRequest } from '../../redux/modules/person/getAll/actions/actions'
import CardView from '../../components/card';
import { connect } from 'react-redux'
import Paginator from '../../components/paginator'

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

    const handlePageClick = (pageNumber) => {
        fetchPersonsByPageNumberRequest(pageNumber.selected + 1);
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
    loading: state.persons.loading,
    error: state.persons.error,
    currentPageNumber: state.persons.currentPageNumber,
    pageCount: state.persons.pageCount
}}

const mapDispatchToProps = {
    fetchPersonsByPageNumberRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
