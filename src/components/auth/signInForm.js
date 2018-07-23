import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';

class SignInForm extends Component {
    render() {
        return (
            <form className="signInForm">
                <FormTitle className="signIn-form__title" text="Sign in" />
                <Field className="signIn-form__email"component={FormInput} name="email" type="email"/>
            </form>
        )
    }
}

SignInForm = reduxForm ({
    form: 'signIn'
})(SignInForm);

export default SignInForm;