import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SignUpForm extends Component {
    render() {
        return (
            <form className="signUpForm">
                <FormTitle className="SignUp-form__title" text="New User" />

                <div className='margin'>

                    <Field
                        className="SignUp-form__fullName"
                        placeholder="Full Name"
                        name="fullName"
                        type="text"
                        title="Full Name"
                        component={FormInput}
                    />

                    <Field
                        className="SignUp-form__unit"
                        placeholder="Unit Number"
                        name="unit"
                        type="text"
                        title="Unit #"
                        component={FormInput}
                    />

                    <Field
                        className="SignUp-form__email"
                        placeholder="Email"
                        name="email"
                        type="email"
                        title="Email"
                        component={FormInput}
                    />

                    <Field
                        className="SignUp-form__password"
                        placeholder="Password"
                        name="password"
                        type="password"
                        title="Password"
                        component={FormInput}
                    />

                    <Field
                        className="SignUp-form__create-account"
                        name="createAccount"
                        type="submit"
                        title="Create Account"
                        component={FormButton}
                    />

                    <div className='SignUp-form__textLinks link'>
                    <TextLink to='/signin' text="Already Registered? Login" />
                    </div>

                </div>
                
            </form>
        )
    }
}

SignUpForm = reduxForm ({
    form: 'SignUp'
})(SignUpForm);

export default SignUpForm;