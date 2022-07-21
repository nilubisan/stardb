import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ErrorBoundary from '../errorBoundary'
import Promo from '../../pages/promo'
import Persons from '../../pages/persons'
import Starships from '../../pages/starships'
import Planets from '../../pages/planets'
import Header from '../header'
import Login from '../login'
import Loader from '../loader'
import ProtectedLayout from '../protectedLayout'
import { initializeApp } from '../../redux/modules/app/actions/actions'
import { connect } from 'react-redux'
import './app.css'

const App = ({ isInitialized, initializeApp }) => {
    useEffect(() => {
        initializeApp()
    }, [])

    return (
        !isInitialized ? (
            <Loader/>
        ) : (
            <ErrorBoundary>
                <Router>
                    <div className="main">
                        <Header/>
                        <Routes>
                            <Route path="/" element={ <Promo/> }/>
                            <Route element={ <ProtectedLayout /> }>
                                <Route path="persons" element={ <Persons/> }/>
                            </Route>
                            <Route element={ <ProtectedLayout /> }>
                                <Route path="starships" element={ <Starships/> }/>
                            </Route>
                            <Route element={ <ProtectedLayout /> }>
                                <Route path="planets" element={ <Planets/> }/>
                            </Route>
                            <Route path="login" element={ <Login/> }/>
                        </Routes>
                    </div>
                </Router>
            </ErrorBoundary>
        )
    )
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})

const mapDispatchToProps = {
    initializeApp
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
