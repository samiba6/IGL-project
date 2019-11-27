import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./sign.css";

class SignUpForm extends Component {
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
        <div className="SignUpForm">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <table>
                <tr>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="name">Nom</label>
                            <input type="text" id="name" className="FormFieldInput" placeholder="Entrer votre nom copmlet" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="password">Mot De Pass</label>
                            <input type="password" id="password" className="FormFieldInput" placeholder="Entrer votre password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>   
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="email">Address E-Mail </label>
                            <input type="email" id="email" className="FormFieldInput" placeholder="Entrer votre e-mail" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="numeroTele">Numero De Telephone</label>
                            <input type="numbre" id="numeroTele" className="FormFieldInput" placeholder="Entrer votre numero de telephone" name="numeroTele" value={this.state.numeroTele} onChange={this.handleChange} />
                        </div>
                        
                    </th>
                </tr>    
                <tr>
                    <th>
                        <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="dateNaissance">Date De Naissance</label>
                            <input type="date" id="lieuNaisssance" className="FormFieldInput"  name="dateNaissance" value={this.state.dateNaissance} onChange={this.handleChange} />
                        </div>
                    </th>
                    <th>
                    <div className="FormField">
                            <label className="FormFieldLabel" htmlFor="lieuNaissance">Lieu De Naissance </label>
                            <input type="text" id="lieuNaissance" className="FormFieldInput" placeholder="Entrer votre lieu de naissance" name="lieuNaissance" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </th>
                </tr>
              </table>

              <div className="FormField">
                <label className="FormFieldCheckboxLabel">
                    <input className="FormFieldCheckbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormFieldTermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormFieldButton mr-20">Sign Up</button> 
                  <Link to="/sign-in" className="FormFieldLink">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
