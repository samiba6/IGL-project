import React, { Component } from 'react';

import { HashRouter as Router, Route,Switch , Link, NavLink } from 'react-router-dom';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import SignInForm from './components/signInForm';
import Switcher from './components/switcher';
import MainPage from './components/mainPage';
import Modifier from './components/modifer';
import './components/sign.css';
import Nav from './components/nav';

class App extends Component {
 /*
        <div>
          
        
        </div>
       
        
        */
 
  render() {
    return (
      <Router basename="/appPage">
          <div className="container">
            <Switch>
              <div>
                <Route exact path="/"  component={Switcher}></Route>
                <Route exact path="/sign-in"  component={Switcher}></Route>
                <Route exact path="/sign-up"  component={Switcher}></Route>
                <Route path="/home" component={MainPage}></Route>
              </div>
            </Switch>
          </div>
          
      </Router>
      
    );
  }
}

export default App;
