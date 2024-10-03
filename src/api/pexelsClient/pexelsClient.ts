import axios from 'axios';
import { pexelsApiKey, pexelsClientBaseUrl } from './constants';

export const pexelsClient = axios.create({
  baseURL: pexelsClientBaseUrl,
  headers: {
    Authorization: pexelsApiKey,
  },
});
