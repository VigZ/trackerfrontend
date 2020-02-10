import React from 'react'
import PropTypes from 'prop-types';

import './ResultCard.scss';

const ResultCard = (props) => {
return (
  <a href={props.url} className="resultLink" target="_blank" rel="noopener noreferrer">
    <div className="card resultCard">
      <div className="card-left">
        <img src={props.imageUrl} className="card-image" alt="card_image" height='200px' width='200px'/>
      </div>
        <div className="card-body card-right">
          <h5 className="card-name">{props.name}</h5>
          <p className="card-text">{props.rating}/5 - {props.price}</p>
          <p className="card-text">{props.phone}</p>
          <p className="card-text">{props.location.address1}, {props.location.city}, {props.location.zip_code}</p>
          <p className="card-text">{props.location.state}, {props.location.country}</p>
        </div>
    </div>
  </a>
  )
}

export default ResultCard

ResultCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  phone: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,
  location: PropTypes.object
}
