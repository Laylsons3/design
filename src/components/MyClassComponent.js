import React, { Component } from 'react';

export class MyClassComponent extends Component {

    render() {
        return(
            <div>
            <span>{this.props.value}</span>
            </div>
        );
    }

}