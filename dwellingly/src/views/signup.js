import React, { Component } from 'react';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../App';
import * as axios from 'axios';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "*Name must have at least 2 characters")
        .max(100, "*Names can't be longer than 100 characters"),
    lastName: Yup.string()
        .min(2, "*Name must have at least 2 characters")
        .max(100, "*Names can't be longer than 100 characters"),
    emailAddress: Yup.string()
        .required("*Email Address is required"),
        //To-Do: PASSWORD VALIDATION WITH YUP
    // password: Yup.string()
    //     .required("*City is required"),
    // confirmPassword: Yup.string()
    //     .required("*Password is required") 
});

const formHandler = (data) => {
    // axios.post('http://localhost:5000/properties', data, { headers: {"Authorization" : `Bearer ${context.user.accessJwt}`} })
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
    }
}