import CssBaseline from '@material-ui/core/CssBaseline'
import LinearProgress from '@material-ui/core/LinearProgress'
import React from 'react'
import { connect, Provider } from 'react-redux'
import { Route, Router, Switch } from 'react-router-dom'
import { compose } from 'redux'
import history from './common/history'
import SearchAppBar from './components/AppBar/SearchAppBar'
import ErrorPage from './components/ErrorPage/ErrorPage'
import { Main } from './components/Main/Main'
import ListContainer from './components/List/ListContainer'
import Profile from './components/Profile/Profile'
import NewSongForm from './components/Song/NewSongForm'
import SongContainer from './components/Song/SongContainer'
import SongsListContainer from './components/SongList/SongsListContainer'
import { initializeApp } from './redux/app-reducer'
import store from './redux/store'
import { Auth0Provider } from './components/Auth0/react-auth0-spa'
import config from './components/Auth0/auth_config'
import { setUserInfo } from './redux/auth-reducer'

// type PropsType = {
//     initialized: boolean
//     initializeApp: () => void
//     onSetSidebarOpen: () => void
// }

class App extends React.Component {
    // class App extends React.Component<PropsType, StateType > {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (this.props.error) {
            return <ErrorPage error={this.props.error} />
        }

        if (!this.props.initialized) {
            return <LinearProgress />
        }

        const routes = (
            <Switch>
                {/*<Route path='/sign/' exact render={() => <SignIn/>}/>*/}
                {/*<Route path='/callback' exact render={() => <Callback/>}/>*/}
                <Route path="/lists/" exact render={() => <ListContainer />} />
                <Route path="/new/" exact render={() => <NewSongForm />} />
                <Route
                    path="/card/:id/:index(\d+)?"
                    component={SongContainer}
                />
                <Route
                    path="/cards/"
                    exact
                    render={() => <SongsListContainer />}
                />
                <Route path="/profile/" exact render={() => <Profile />} />
                {/*<PrivateRoute path='/cards/' exact render={() => <SongsListContainer/>}/>*/}
                <Route exact component={Main} />
            </Switch>
        )

        return (
            <>
                <CssBaseline />
                <SearchAppBar />
                {routes}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        error: state.app.error,
    }
}

const AppContainer = compose(
    // withRouter,
    connect(mapStateToProps, { initializeApp })
)(App)

const onRedirectCallback = (appState) => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    )
}

const RandomCardsApp = () => {
    console.log('redirect_uri', window.location.origin)
    return (
        <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            audience={config.audience}
            redirect_uri={window.location.origin}
            // redirect_uri={'http://localhost:3000/callback'}
            onRedirectCallback={onRedirectCallback}
            cacheLocation={'localstorage'}
        >
            <Router history={history}>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </Router>
        </Auth0Provider>
    )
}
export default RandomCardsApp
