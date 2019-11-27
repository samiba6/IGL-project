import React, { Component } from 'react';

import Nav from "./nav";

class Header extends Component {

  render() {
    return (
      <header>
      <Nav/>
        <div className="head">
            <h1>All What< br/>You Need</h1>
            <div>
              <p>ce site te permis de mieux comuniquer avec tes enseignants et meme l'administration. tu peux aussi consulter ton empoi du temps, voir tes cours, acceder au quizs programmer par tes enseignants et au devoirs demander. tu peux aussi acceder au forum de l ecole ou tu peux poser tes question a tes camarades et meme demader de l aide au enseignants. </p>
              <div><a className="contact" href="javascript:document.body.scrollIntoView(false);">Contact Us</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
