import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { sagaMiddleware } from './store';
import { rootSaga } from "./sagas/rootSaga";

ReactDOM.render(
<Provider store={configureStore()}>
    <App />
</Provider>, document.getElementById('root'));

sagaMiddleware.run(rootSaga);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
