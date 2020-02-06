import { all } from 'redux-saga/effects';
import timeDetailsSaga from './timeDetailsSaga'

export function* rootSaga() {
    yield all([timeDetailsSaga()]);
}