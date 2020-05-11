import CssBaseline from "@material-ui/core/CssBaseline"
import LinearProgress from "@material-ui/core/LinearProgress"
import React from "react"
import {connect, Provider} from "react-redux"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {compose} from "redux"
import ErrorPage from "./components/ErrorPage/ErrorPage"
import {Main} from "./components/Info/Main"
import ListContainer from "./components/List/ListContainer"
import SearchAppBar from "./components/SearchAppBar/SearchAppBar"
import SongContainer from "./components/Songs/Song/SongContainer"
import SongsListContainer from "./components/Songs/SongList/SongsListContainer"
import {initializeApp} from "./redux/app-reducer"
import store from "./redux/store"
import SignIn from "./SignIn/SignIn"


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

        if (this.props.error){
            return <ErrorPage error={this.props.error} />
        }

        if (!this.props.initialized) {
            return <LinearProgress />
        }

        const routes = (
            <Switch>
                <Route path='/cards/' exact render={() => <SongsListContainer/>}/>
                <Route path='/lists/' exact render={() => <ListContainer/>}/>
                <Route path='/sign/' exact render={() => <SignIn/>}/>
                <Route path='/card/:id' component={SongContainer}/>
                <Route exact component={Main}/>
            </Switch>
        )

        return (
            // <Layout>
            <>
                <CssBaseline />
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
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>

}
export default RandomCardsApp
