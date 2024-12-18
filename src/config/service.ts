import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/quotes';

export const service = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});
