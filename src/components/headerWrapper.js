import React, { Component } from 'react';
import { HeaderBar } from './bar';

class HeaderWrapper extends Component {
    render() {
        return [
            <div className="headerWrapper">
                <h1 className="headerWrapper__title">Welcome to HOA Manager</h1>
                <p className="headerWrapper__subTitle">Please login to continue</p>
            </div>,
            HeaderBar(),
            this.props.children
        ]
    }
}

export default HeaderWrapper;