import React from 'react';
import MapContainer  from './components/mapContainer'
import TimeDetail  from './components/timeDetails'
import {connect} from 'react-redux'
import './App.css';
import './components/config.scss'

//key :  AIzaSyBVfCUDgvjAKdYun54khJN3w_OBkxCJ8x8


const  App = (props)=> {
  return (
    <div className="App">
      <div className="details_area">
      {props.selectedPlaceData && props.selectedPlaceData.lat | props.showLoader ? <TimeDetail className='details--card'/> : null}
      </div>
      <div>
        <MapContainer/>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
     selectedPlaceData : state.timeDetailsReducer.timeDetails,
     showLoader : state.timeDetailsReducer.showLoader
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);














