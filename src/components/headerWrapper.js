import React, { Component } from 'react';

class HeaderWrapper extends Component {
    render() {
        return (
            <div className="headerWrapper">
                <h1>Welcome to HOA Manager</h1>
                <p>Please login to continue</p>
                {this.props.children}
            </div>
        )
    }
}

export default HeaderWrapper;