import React, { Component } from 'react';

import SignInForm from './signInForm';

class SignIn extends Component {
    render() {
        return (
            <div className="signIn">
                <SignInForm />
            </div>
        )
    }
}

export default SignIn;