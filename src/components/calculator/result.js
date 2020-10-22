import React, { Component } from "react";

class Result extends Component {
    render() {
        return (
            <div className={`alert alert-${this.props.type}`}>
                {this.props.msg}
            </div>
        )
    }
}

export default Result;