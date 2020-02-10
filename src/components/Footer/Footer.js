import React from 'react'
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = (props) => {

  return (
    <div className="footer">
      <div className="footer-text">
        <p>
          {props.footerText}
        </p>
      </div>
    </div>
  )
}
export default Footer

Footer.propTypes = {
  footerText: PropTypes.string,
}

Footer.defaultProps = {
  footerText: ''
}
