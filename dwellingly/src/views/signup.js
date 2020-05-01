import React, { Component } from 'react';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
// import '../App.scss';
// import '.dwellingly\src\scss\pages\_signup.scss'
import { UserContext } from '../App';
// import * as axios from 'axios';

//issues:
    //clicking the sign up button does not result in console log (line 67 or line 32)
    //errors for First Name and Last Name fields not rendering.

//To Do
    //add: OR "sign Up with google" link 
    //add "privacy policy" href or redirect link
    //link up to styling

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "*Name must have at least 2 characters")
        .max(100, "*Names can't be longer than 100 characters"),
    lastName: Yup.string()
        .min(2, "*Name must have at least 2 characters")
        .max(100, "*Names can't be longer than 100 characters"),
    emailAddress: Yup.string()
        .required("*Email Address is required"),
    password: Yup.string()
        .required("*Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match") //https://github.com/jaredpalmer/formik/issues/90
        .required("*Password confirmation is required") 
});

const formHandler = (data) => {
    console.log("Data passed to signup formHandler:", data);
    // axios.post('http://localhost:5000/register', data, { headers: {"Authorization" : `Bearer ${context.user.accessJwt}`} })
    //     .then(function(response){
    //         console.log(response);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
}

export class SignupForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        allUsers: undefined,
        }
    }    

    render() {
      return (
        <UserContext.Consumer>
         {session => {
                return (
            <div className="add-property__container">
                <h2 className="page-title">Create an Account for Dwelling.ly</h2>

                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        emailAddress: "",
                        password: "",
                        passwordConfirmation: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm})=> {
                        console.log("submitting", values);
                        setSubmitting(true);
                        formHandler(values);
                        resetForm();
                        setSubmitting(false);
                        
                    }}>
                    {({ handleSubmit, handleChange, values, errors, touched, isValid, isSubmitting }) => (
                        <div className="form-container add-property__main_container">
                            <Form className="add-property__form-container" onSubmit={handleSubmit}>
                                <div className="form-row columns">
                                    <label className="column is-one-fifth" htmlFor="firstName">First Name</label>
                                    <Field
                                        className="column form-field"
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        value={values.firstName}
                                        placeholder="First Name"
                                    />
                                    {errors.firstName ? (<div className="error-message">{errors.firstName}</div>) : null} 
                                </div>
                                <div className="form-row columns">
                                    <label className="column is-one-fifth" htmlFor="lastName">Last Name</label>
                                    <Field
                                        className="column form-field"
                                        type="text"
                                        name="lastName"
                                        onChange={handleChange}
                                        value={values.lastName}
                                        placeholder="Last Name"
                                    />
                                    {errors.lastName ? (<div className="error-message">{errors.lastName}</div>) : null} 

                                </div>
                                <div className="form-row columns">
                                    <label className="column is-one-fifth" htmlFor="emailAddress">Email</label>
                                    <Field
                                        className="column form-field"
                                        type="text"
                                        name="emailAddress"
                                        onChange={handleChange}
                                        value={values.emailAddress}
                                        placeholder="Email"
                                    />
                                    {errors.emailAddress ? (<div className="error-message">{errors.emailAddress}</div>) : null} 

                                </div>
                                <div className="form-row columns">
                                    <label className="column is-one-fifth" htmlFor="password">Password</label>
                                    <Field
                                        className="column form-field"
                                        type="text"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        placeholder="Password"
                                    />
                                    {errors.password ? (<div className="error-message">{errors.password}</div>) : null} 
                                </div>
                                <div className="form-row columns">
                                    <label className="column is-one-fifth" htmlFor="confirmPassword">Confirm Password</label>
                                    <Field
                                        className="column form-field"
                                        type="text"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        value={values.confirmPassword}
                                        placeholder=" Confirm Password"
                                    />
                                    {errors.confirmPassword ? (<div className="error-message">{errors.confirmPassword}</div>) : null} 
                                </div>
                                
                                <div className="container-footer">
                                    <button className={`${isValid && "active"} save_button button is-rounded`} type="submit" disabled={isSubmitting}>SIGN UP</button>
                                    
                                </div>
                            </Form>

                        </div>
                        )}
                </Formik>
            </div>
            )
         }}   
        </UserContext.Consumer>
        
      )
    }
}

