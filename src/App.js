import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './stylesheets/custom.css';


import Nav from './components/Nav';
import Header from './components/Header';
import ClubCarousel from './components/ClubCarousel';
import Background from './components/Background';
import About from './components/About';
import Members from './components/Members'
import Sponsors from './components/Sponsors';
import ContactUs from './components/ContactUs';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Medium from './components/Medium';

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Header></Header>
        <About></About>
        <Members/>
        <Sponsors></Sponsors>
        <ClubCarousel/>
        <Instagram></Instagram>
        <Medium></Medium>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
