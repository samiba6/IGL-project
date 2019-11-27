import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './signUpForm';
import SignInForm from './signInForm';

import './sign.css';

class Switcher extends Component {
  render() {
    return (
      
        <div className="switcherApp">
          <div className="AppAside">
          <div className="AppForm">
            

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitleLink--Active" className="FormTitleLink">Sign In</NavLink> or <NavLink exact to="/sign-up" activeClassName="FormTitleLink--Active" className="FormTitleLink">Sign Up</NavLink>
              </div>

              <Route exact path="/sign-up" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>
          </div>
        </div>
        
    );
  }
}

export default Switcher;
