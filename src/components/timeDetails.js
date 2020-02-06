import React, { Component } from 'react';
import {connect} from 'react-redux'



export class TimeDetail extends Component {
  render() {
    return (
        <React.Fragment>
            {this.props.showLoader ? <div class="loader"></div> : <div className='details--card'>
                {/* <div className="close"></div> */}
                <img className="card_image" src={this.props.selectedPlaceData && this.props.selectedPlaceData.isDay ? require('../assets/images/morning.png')
                    : require('../assets/images/night.jpg')} />
                <div className="card_details">
                    <span className="card_category">Day/Night : </span>
                    <span className="card_value">{this.props.selectedPlaceData.isDay ? 'Its Day here' : 'Its spleeing time'}</span>
                </div>
            </div>}
        </React.Fragment>    
    );
  }
}

const mapStateToProps = state => {
    return {
       selectedPlaceData : state.timeDetailsReducer.timeDetails,
       isError : state.timeDetailsReducer.isError,
       showLoader : state.timeDetailsReducer.showLoader
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeDetail);