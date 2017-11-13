/* global Headers, fetch */
import config from './config';

const url = 'http://api.football-data.org/v1';
const key = config.footballDataAPIKey;

const headers = new Headers();
headers.append('X-Auth-Token', key);

const init = {
  method: 'GET',
  headers,
  mode: 'cors',
  cache: 'default'
};

const handleErrors = async (response) => {
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error);
  }
  return response;
};

const footballDataApi = {
  getAll: async () => {
    try {
      const response = await fetch(`${url}/competitions`, init)
        .then(handleErrors);
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
  getOne: async (id) => {
    try {
      const response = await fetch(`${url}/competitions/${id}`, init)
        .then(handleErrors);
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
};

export default footballDataApi;
