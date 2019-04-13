import React, { Component } from 'react';
const axios = require('axios');

axios.defaults.baseURL = 'https://owe-kazu.herokuapp.com/api/rest/';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

export default class LoadPatient extends Component {
  state = { patient: {}, properties: [], id: '' };

  componentDidMount() {
    axios.get('student').then(response => {
      // handle success
      const { properties, id } = response.data;
      this.setState({ properties: properties, id, patient: response.data });
      console.log('JE TO SUPER', properties, id, response.data);
    });

    // const instance = axios.create({
    //   baseURL: 'https://owe-kazu.herokuapp.com/api/rest/',
    //   timeout: 1000,
    //   headers: { 'Content-Type': 'application/json' }
    // });

    // instance.get('student').then(response => {
    //   // handle success
    //   console.log(response);
    // });
  }

  handleFinishCase = (event, id) => {
    event.preventDefault();
    console.log(id);
    console.log({ patient: { ...this.state.patient } });

    axios
      .post(
        `student/${id}`,
        JSON.stringify({ patient: { ...this.state.patient } })
      )
      .then(response => {
        // handle success
        console.log('JE TO NA HOVNO', response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2>Random Patient Case</h2>
        ID: <i>{this.state.id}</i>
        {this.state.properties.map((field, index) => (
          <div key={index}>
            <h3>{field.title}</h3>
            <p>{field.text}</p>
          </div>
        ))}
        <button onClick={event => this.handleFinishCase(event, this.state.id)}>
          Complete this case
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
