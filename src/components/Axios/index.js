const axios = require('axios');

const instance = axios.create({
      baseURL: 'https://owe-kazu.herokuapp.com/api/rest/',
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    });

    instance.interceptors.request.use(request => {
        console.log('Starting Request', request);
        return request;
      });
      
      instance.interceptors.response.use(response => {
        console.log('Response:', response);
        return response;
      });

export default instance;