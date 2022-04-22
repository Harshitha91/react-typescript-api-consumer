import axios from 'axios';

export default axios.create({
  baseURL: 'https://gutendex.com',
  headers: {
    'Content-type': 'application/json',
  },
});
