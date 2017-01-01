import React from 'react';

export default class GreetingCom extends React.Component{
    render() {
        return (
            <div className="greeting">
                Hello, big big {this.props.name}!
            </div>
        );
    }
};