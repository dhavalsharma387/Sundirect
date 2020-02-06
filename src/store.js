import { createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer";

import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();




export default function configureStore(initialState={}){
    return  createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
     
}
