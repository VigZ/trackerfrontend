import React from 'react'
import { connect } from 'react-redux'

import './SearchContainer.scss';

import ResultsList from '../ResultsList/ResultsList.js'
import MapWrapper from '../MapWrapper/MapWrapper.js'

import {fetchBusinessInfo} from '../../actions/search.js'


class SearchContainer extends React.Component {
  state = {
    searchTerm:""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchBusinessInfo(this.state.searchTerm)
    this.setState({
      searchTerm: ""
    })
  }

  sendPosition = (position) => {
      this.props.fetchBusinessInfo(`${position.coords.latitude} ${position.coords.longitude}`) ;
    }

  handleGeocode = (e) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.sendPosition, this.showError);
      }
      else {
        window.alert("There seems to have been an error! Make sure you click to allow access to your location!");
      }
    }

    showError = (error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
        window.alert("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          window.alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          window.alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          window.alert("An unknown error occurred.")
          break;
        default:
          window.alert("An error occurred. Please try again.")
          break;
      }
    }

  render() {

     return(
       <div className="searchContainer">
         <div className="searchRow">
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <input type="text" value={this.state.searchTerm} className="search rounded" placeholder="Please enter your location then press enter" ></input>
            </form>
            <button onClick={this.handleGeocode}>Current Location</button>
         </div>
         <div className="sideBySide">
           <MapWrapper locations={this.props.businessList}/>
           <ResultsList resultsList={this.props.businessList}/>
         </div>
       </div>
        )
      }
}

const mapStateToProps = (state) => ({businessList: state.searchReducer.businessList})
export default connect(mapStateToProps,{fetchBusinessInfo})(SearchContainer);
