import axios from 'axios';
let token = localStorage.getItem('token');
const instance = axios.create({
  baseURL: 'https://portfolio-backendv3.herokuapp.com/api/v1',
  timeout: 8000,
  headers: {
    'x-auth-token': token ? token : '',
  },
});

export default instance;
