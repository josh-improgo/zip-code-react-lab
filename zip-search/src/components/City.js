import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class City extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        const { cityName, state, lat, long, population, totalWages } = this.props;
        return (
            <div className="city">
                <h4>{cityName}, {state}</h4>
                <ul>
                    <li>State: {state}</li>
                    <li>Location: ({lat}, {long})</li>
                    <li>Population (estimated): {population}</li>
                    <li>Total Wages: {totalWages}</li>
                </ul>
            </div>
        )
    }
}

export default City;