import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY as string;
const API_URL = 'https://api.api-ninjas.com';

export const service = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': API_KEY
  }
});
