import React from 'react'
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => {

  return (
    <div className="header">
      <div className="banner-text">
        <p>
          {props.bannerText}
        </p>
      </div>
    </div>
  )
}
export default Header

Header.propTypes = {
  backgroundImage: PropTypes.string,
  bannerText: PropTypes.string,
}

Header.defaultProps = {
  backgroundImage: '',
  bannerText: ''
}
