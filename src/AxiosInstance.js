import axios from 'axios';
let token = localStorage.getItem('token');
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 2000,
  headers: {
    'x-auth-token': token ? token : '',
  },
});

export default instance;
