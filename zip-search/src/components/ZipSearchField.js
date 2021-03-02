import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import City from './City'
class ZipSearchField extends React.Component {
    constructor(props) {
        super();
        this.state = {
            zipVal: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.zipVal);
        this.props.getData(this.state.zipVal);
    }

    handleChange(e) {
        this.setState({
            zipVal: e.target.value
        })
    }

    render() {
        return (
            <form className="zip-form" onSubmit={this.handleSubmit}>
                <label htmlFor="zip-search">Zip Search</label>
                <input
                    id="zip-search"
                    name="zip-search"
                    type="search"
                    placeholder="i.e. 80911 (Colorado Springs)"
                    value={this.state.zipVal}
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </form>

        )
    }

}

export default ZipSearchField;