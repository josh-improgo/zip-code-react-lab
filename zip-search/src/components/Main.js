import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import City from './City'
import ZipSearchField from './ZipSearchField'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            cities: [],
            errorMessage: "",
        }
        this.getData = this.getData.bind(this);
    }

    getData(zipCode) {
        const baseurl = 'http://ctp-zip-api.herokuapp.com/'
        const url = 'zip/'
        const endPoint = `${baseurl}${url}${zipCode}`

        const handleError = () => {
            this.setState({
                errorMessage: "Invalid Zip Code"
            })
            setTimeout(() => {
                this.setState({
                    errorMessage: ""
                })
            }, 3000);
        }

        const handleResponse = responseJson => {
            let cityComponents = [];

            console.log(responseJson);
            responseJson.map((obj) => {
                const { City: name, State, Lat, Long, EstimatedPopulation, TotalWages } = obj;
                cityComponents.push(
                    <City
                        key={name}
                        cityName={name}
                        state={State}
                        lat={Lat}
                        long={Long}
                        population={EstimatedPopulation}
                        totalWages={TotalWages}
                    />
                )
            })
            this.setState({
                cities: [...cityComponents],
            })
            console.table(cityComponents);

        }

        fetch(endPoint, {
            method: 'GET',
            headers: {
            }
        })
            .then(response => response.json())
            .then(responseJson => handleResponse(responseJson))
            .catch(error => handleError())
    }
    render() {
        return (
            <main className="Main">
                <div className="error-message">{this.state.errorMessage}</div>
                <ZipSearchField getData={this.getData} />
                <div className="cities">
                    {this.state.cities}
                </div>
            </main>
        )
    }
}

export default Main;