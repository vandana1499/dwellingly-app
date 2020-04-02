import React from 'react';
// import Form from './Form.js'; 
import dwellinglyLogo from '../assets/images/dwellingly_logo.png';

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //state to hold values entered into form field by users and errors sent from the validation handler
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        errors: []
    } 
  }


render() {
    const {
        firstName,
        lastName,
        emailAddress,
        password,
        confirmPassword,
        errors
      } = this.state;

    return (
        <div className="bounds">
            <div className="grid-33 centered signin">
                <h1>Sign Up</h1>
                <Form 
                    cancel={this.cancel}
                    errors={errors}
                    submit={this.submit}
                    submitButtonText="Sign Up"
                    elements={() => ( //render prop (streamlines DOM formatting)
                    <React.Fragment>
                        <input 
                        id="firstName" 
                        name="firstName" 
                        type="text"
                        value={ firstName } 
                        onChange={ this.change } 
                        placeholder="First Name" />
                        <input 
                        id="lastName" 
                        name="lastName" 
                        type="text"
                        value={ lastName } 
                        onChange={ this.change } 
                        placeholder="Last Name" />
                        <input 
                        id="emailAddress" 
                        name="emailAddress" 
                        type="text"
                        value={ emailAddress } 
                        onChange={ this.change } 
                        placeholder="Email Address" />
                        <input 
                        id="password" 
                        name="password"
                        type="password"
                        value={ password } 
                        onChange={ this.change } 
                        placeholder="Password" />
                        <input 
                        id="confirmPassword" 
                        name="confirmPassword"
                        type="confirmPassword"
                        value={ confirmPassword } 
                        onChange={ this.change } 
                        placeholder="Password Confirmation" />
                    </React.Fragment>
                    )} />
            </div>
      </div>
    )
  }
}