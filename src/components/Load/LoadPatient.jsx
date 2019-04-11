import React, { Component } from 'react';
const axios = require('axios');

axios.defaults.baseURL = 'https://owe-kazu.herokuapp.com/api/rest/';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

export default class LoadPatient extends Component {
  componentDidMount() {
    axios.get('student').then(response => {
      // handle success
      console.log('JE TO NA SUPER', response);
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

  render() {
    return <div />;
  }
}
