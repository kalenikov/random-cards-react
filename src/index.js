import React from 'react';
import ReactDOM from 'react-dom';
import RandomCardsApp from './App'



import history from "./common/history";

import * as serviceWorker from './serviceWorker';

// const onRedirectCallback = appState => {
//     history.push(
//         appState && appState.targetUrl
//             ? appState.targetUrl
//             : window.location.pathname
//     );
// };

ReactDOM.render(
  <RandomCardsApp/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
