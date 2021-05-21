import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:8080' });

export const TOKEN = "Basic bW92aWU6bW92aWUxMjM=";