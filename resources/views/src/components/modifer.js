import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./sign.css";

class Modifier extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        let dateNaissance = 

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="Modifier">
            <h1>Modifier vos information</h1>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <table>
                <tr>
                    <th>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="name">Nom</label>
                            <input type="text" id="name" className="FormField__Input" placeholder="Entrer votre nom copmlet" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Mot De Pass</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Entrer votre password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>   
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">Address E-Mail </label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Entrer votre e-mail" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="numeroTele">Numero De Telephone</label>
                            <input type="numbre" id="numeroTele" className="FormField__Input" placeholder="Entrer votre numero de telephone" name="numeroTele" value={this.state.numeroTele} onChange={this.handleChange} />
                        </div>
                        
                    </th>
                </tr>    
                <tr>
                    <th>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="dateNaissance">Date De Naissance</label>
                            <input type="date" id="lieuNaisssance" className="FormField__Input"  name="dateNaissance" value={this.state.dateNaissance} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                    <div className="FormField">
                            <label className="FormField__Label" htmlFor="lieuNaissance">Lieu De Naissance </label>
                            <input type="text" id="lieuNaissance" className="FormField__Input" placeholder="Entrer votre lieu de naissance" name="lieuNaissance" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </th>
                </tr>
              </table>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button>
              </div>
            </form>
          </div>
        );
    }
}

export default Modifier;
