import axios from 'axios';

const pexelsApiKey = import.meta.env.VITE_PEXELS_API_KEY;

export const pexelsClient = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: pexelsApiKey,
  },
});
