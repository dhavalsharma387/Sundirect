import { put, takeLatest, all } from 'redux-saga/effects';
import {commonActions as actions} from '../actions/commonActions'
import moment from "moment";

export default function* timeDetailsSaga() {
    yield takeLatest(actions.API_GET_TIME_DETAILS, fetchTimeDetails)
}


function* fetchTimeDetails(action) {
    
    try {

        const params = `lat=${action.payload.lat}&lng=${action.payload.lng}&formatted=0`
        const data = yield fetch('https://api.sunrise-sunset.org/json?'+ params )
            .then(response => response.json());

        let sunset =  new Date(data.results.sunset).getUTCHours();
        
        if(new Date().getUTCHours() > sunset){
            data.results.isDay = false
        }else{
            data.results.isDay = true
        }

        data.results.lat =action.payload.lat
        data.results.lng =action.payload.lng
        
        yield put({ type: actions.API_GET_TIME_DETAILS_SUCCESS, payload: data.results });    
    
    } catch (error) {
        yield put({ type: actions.API_GET_TIME_DETAILS_FAIL});    
    }
    
}



