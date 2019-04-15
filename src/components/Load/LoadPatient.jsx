import React, { Component } from 'react';
const axios = require('axios');

axios.defaults.baseURL = 'https://owe-kazu.herokuapp.com/api/rest/';

export default class LoadPatient extends Component {
  state = { patient: {}, properties: [], id: '', exams: [] };
  // add error to state to handle trough HOC

  componentDidMount() {
    axios.get('student').then(response => {
      // handle success
      const { properties, id } = response.data;
      console.log(response.data);
      this.setState({
        properties: properties,
        id,
        patient: response.data,
        exams: [properties[9]]
      });
      console.log(properties[9]);
    });
  }
  handleSuccessFinishedCase = () => {};

  handleFinishCase = (event, id) => {
    event.preventDefault();

    axios
      .post(
        `student/${id}`,
        JSON.stringify({
          patient: { ...this.state.patient },
          exams: this.state.exams
        }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(response => {
        // handle success
        this.handleSuccessFinishedCase();
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
