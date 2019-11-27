import React, { Component } from 'react';
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
            <h2>Services</h2>
            
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                <p className="service-title">Planning</p>
                <p>ici vous pouvez consulter vos emploi du temps, et tout les documents envoyer par l administration. </p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="fas fa-crop"></i></p>
                <p className="service-title">Forum</p>
                <p>ici vous pouvez poser vos question et repondre au question de vos camarades.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="fas fa-code"></i></p>
                <p className="service-title">Quiz et Devroir</p>
                <p>ici vous trouvez les devoirs et les quizs envoyer par vos enseignant.</p>
                
              
          </div>
       
        </div>

        </div>
        
        <section>
            <h2>Journal de l'ecole</h2>
            <div>
              <p> cette partie est utiliser comme un journal de l ecole elle est accecible par tout le monde. Elle doit contenir tout l actualite de l'ecole, Par exemple : les evenements programent , les contrats signier par l'administration. l'administrateur se charger par cette partir. </p>
              </div>
        </section>


        

       
      </main>
    );
  }
}

export default Main;
