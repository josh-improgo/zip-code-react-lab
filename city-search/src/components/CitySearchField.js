import React, { Component } from 'react'

export default class CitySearchField extends Component {
    constructor(props) {
        super();
        this.state = {
            cityVal: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.cityVal);
        this.props.getData(this.state.cityVal);
    }

    handleOnChange(e) {
        this.setState(
            {cityVal: e.target.value}
        )
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="city-search">City Search:</label>
                <input 
                    name="city-search" 
                    id="city-search" 
                    type="search" 
                    value={this.state.cityVal} 
                    onChange={this.handleOnChange} 
                    placeholder="i.e. New York"
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}
