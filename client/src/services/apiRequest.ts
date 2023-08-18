import axios from 'axios';
import { config } from '../config/config';

export const apiRequest = axios.create({
    baseURL: config.baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});
