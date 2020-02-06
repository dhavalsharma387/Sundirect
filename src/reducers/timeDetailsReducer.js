import {commonActions} from '../actions/commonActions'

const initialState = {
      isError : true,
      timeDetails : {},
      showLoader : false,
}

export default  function timeDetailsReducer (state = initialState, action){
    switch (action.type) {

     case commonActions.API_GET_TIME_DETAILS:
      return {...state, timeDetails :{}, showLoader : true, isError : false }
     
     case commonActions.API_GET_TIME_DETAILS_SUCCESS:
        return {...state, timeDetails :action.payload, showLoader : false, isError: false }
     
     case commonActions.API_GET_TIME_DETAILS_FAIL:
          return {...state, timeDetails : {} , showLoader : false, isError : true }
     
          default:
      return state
    }
}