import React from 'react';

export default class NumberBox extends React.Component{

    state = {
        // count: 10
        count: this.props.initialValue
    }

    render() {
        return(
            <div style={{
                        border: "1px solid black",
                        padding: "10px",
                        width: "20px"
            }}>{this.state.count}</div>
        );
    }
}