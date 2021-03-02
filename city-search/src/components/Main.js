import React, { Component } from 'react'
import CitySearchField from './CitySearchField'
export default class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            zipcodes: [],
        }
        this.getData = this.getData.bind(this);
    }

    getData(city) {
        const baseurl = "http://ctp-zip-api.herokuapp.com/";
        const cityParams = `city/${city.toUpperCase()}`;

        const endPoint = `${baseurl}${cityParams}`;

        const handleError = (error) => {
            console.log(error)
        }

        const handleResponse = responseJson => {
            console.log(responseJson);
            const zipCodeComponents = responseJson;
            // responseJson.map(obj => {
            //     zipCodeComponents.push(
            //         obj
            //     )
            // })
            this.setState({
                zipcodes: [...zipCodeComponents]
            });
        }

        fetch(endPoint, {
            method: 'GET',
            headers: {
                
            }
        })
            .then(response => response.json())
            .then(responseJson => handleResponse(responseJson))
            .catch(error => handleError(error));
    }

    render() {
        return (
            <main>
                <CitySearchField getData={this.getData}/>
                <div className="zipcodes">
                    {this.state.zipcodes.join(', ')}
                </div>
            </main>
        )
    }
}
