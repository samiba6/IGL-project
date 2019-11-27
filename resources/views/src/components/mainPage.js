import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';

import './sign.css';

class MainPage extends Component {
  render() {
    return (
        <div className="MainPage">
      
     
        
            <Header/>
            <Main/> 
            <Footer/>
        
      </div>
    );
  }
}

export default MainPage;
