import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import '../index.css';
import SignInForm from "./signInForm.js";
import Form from "./form.js";
import Footer from "./footer.js";
class Nav extends Component {
  
  signInClic(){
    alert(window.container.width);
    if(SignInForm.width==0){
     
    }else{
      SignInForm.width  = 0;
    }
  }
//<Link to="/sign-in" className="About">SignOut</Link>
  render() {
    return (
    
      <nav>
          <ul>
              <li className="logo">School<span>Planet</span></li>
          </ul>
          <ul>
              <li><label  className="About" >About</label></li>
              <li><Link to='/' className="About">SignOut</Link></li>
              
              <li><a  className="About" >your name </a></li>
          </ul>
      </nav>
      
    );
  }
}

export default Nav;
