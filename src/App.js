import CssBaseline from "@material-ui/core/CssBaseline"
import LinearProgress from "@material-ui/core/LinearProgress"
import React from "react"
import {connect, Provider} from "react-redux"
import {Router, Route, Switch} from "react-router-dom"
import {compose} from "redux"
import {PopperContext} from './components/Context/PopperContext'
import ErrorPage from "./components/ErrorPage/ErrorPage"
import {Main} from "./components/Info/Main"
import ListContainer from "./components/List/ListContainer"
import SearchAppBar from "./components/SearchAppBar/SearchAppBar"
import NewSongForm from './components/Song/NewSongForm'
import SongContainer from "./components/Song/SongContainer"
import SongsListContainer from "./components/SongList/SongsListContainer"
import {initializeApp} from "./redux/app-reducer"
import store from "./redux/store"
import SignIn from "./SignIn/SignIn"
import history from './common/history';


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
            return <ErrorPage error={this.props.error}/>
        }

        if (!this.props.initialized) {
            return <LinearProgress/>
        }

        const routes = (
            <Switch>
                <Route path='/cards/' exact render={() => <SongsListContainer/>}/>
                <Route path='/lists/' exact render={() => <ListContainer/>}/>
                <Route path='/sign/' exact render={() => <SignIn/>}/>
                <Route path='/new/' exact render={() => <NewSongForm/>}/>
                <Route path='/card/:id/:index(\d+)?' component={SongContainer}/>
                <Route exact component={Main}/>
            </Switch>
        )

        return (
            // <Layout>
            <>
                <CssBaseline/>
                {/*<TemporaryDrawer/>*/}
                <SearchAppBar/>
                {routes}

            </>
            // </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        error: state.app.error
    }
}

const AppContainer = compose(
    // withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const RandomCardsApp = () => {
    return <Router history={history}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </Router>

}
export default RandomCardsApp
