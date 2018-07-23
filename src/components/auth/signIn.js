import React, { Component } from 'react';
import { FormTitle } from '../formTitle';

class SignIn extends Component {
    render() {
        return (
            <div className="signIn">
                <FormTitle className="signIn__title" text="Sign in" />
            </div>
        )
    }
}

export default SignIn;