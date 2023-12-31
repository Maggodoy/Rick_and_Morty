// import {createStore, applyMiddleware} from "redux";
// import {composeWithDevTools} from "@redux-devtools/extension";
// import rootReducer from "../redux/reducer";
// import thunk from "redux-thunk";

// export default createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer.js';

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // esta línea es para poder hacer peticiones a un server
);
export default store;
