import CssBaseline from "@material-ui/core/CssBaseline";
import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import { connect, Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { compose } from "redux";
import history from "./common/history";
import SearchAppBar from "./components/AppBar/SearchAppBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Main } from "./components/Main/Main";
import NewSongForm from "./components/Song/NewSongForm";
import SongContainer from "./components/Song/SongContainer.js";
import SongsListContainer from "./components/SongList/SongsListContainer.js";
import { initializeApp } from "./redux/app-reducer.js";
import store from "./redux/store.js";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (this.props.error) {
            return <ErrorPage error={this.props.error}/>;
        }

        if (!this.props.initialized) {
            return <LinearProgress/>;
        }

        const routes = (
            <Switch>
                <Route path="/new/" exact render={() => <NewSongForm/>}/>
                <Route
                    path="/card/:id/:index(\d+)?"
                    component={SongContainer}
                />
                <Route
                    path="/cards/"
                    exact
                    render={() => <SongsListContainer/>}
                />
                <Route exact component={Main}/>
            </Switch>
        );

        return (
            <>
                <CssBaseline/>
                <SearchAppBar/>
                {routes}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        error: state.app.error
    };
};

const AppContainer = compose(
    // withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);


const RandomCardsApp = () => {
    console.log("redirect_uri", window.location.origin);
    return (
        <Router history={history}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </Router>
    );
};
export default RandomCardsApp;
