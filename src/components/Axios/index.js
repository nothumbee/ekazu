const axios = require('axios');

const axe = axios.create({
      baseURL: 'https://owe-kazu.herokuapp.com/api/rest/',
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    });

    axe.interceptors.request.use(request => {
        console.log('Starting Request', request);
        return request;
      });
      
      axe.interceptors.response.use(response => {
        console.log('Response:', response);
        return response;
      });

export default axe;