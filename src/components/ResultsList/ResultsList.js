import React from 'react'
import PropTypes from 'prop-types';

import ResultCard from '../ResultCard/ResultCard.js'


import './ResultsList.scss';

const ResultsList = (props) => {
  const resultCards = props.resultsList.map((result)=>{
    return <ResultCard
      name={result.name}
      imageUrl={result.image_url}
      url={result.url}
      phone={result.display_phone}
      rating={result.rating}
      price={result.price}
      location={result.location}/>
  })
  if(props.resultsList.length !== 0){
    return (
      <div className="resultsList">
        {resultCards}
      </div>
    )
  }
  else {
  return (
    <div className="resultsList empty-container">
    </div>
    )
  }
}
export default ResultsList

ResultsList.propTypes = {
  resultsList: PropTypes.arrayOf(PropTypes.object),
}

ResultsList.defaultProps = {
  resultsList: []
}
