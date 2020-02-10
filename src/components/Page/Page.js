import React, { Component } from 'react';

import Header from '../Header/Header.js'
import SearchContainer from '../SearchContainer/SearchContainer.js'
import Footer from '../Footer/Footer.js'


class Page extends Component {


  render() {
    return (
      <div className="main">
        <Header bannerText="Enter a location to find florists near you."/>
        <SearchContainer/>
        <Footer footerText="We hope you found the flowers that suit your needs!"/>
      </div>

    );
  }
}

export default Page;
