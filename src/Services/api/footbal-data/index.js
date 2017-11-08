/* global Headers, fetch */
const url = 'http://api.football-data.org/v1';
const key = 'f11b93b1a3d0422280da175d201a681f';

const headers = new Headers();
headers.append('X-Auth-Token', key);

const init = {
  method: 'GET',
  headers,
  mode: 'cors',
  cache: 'default',
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getAll = async () => fetch(`${url}/competitions`, init).then(handleErrors);
export const getOne = async id => fetch(`${url}/competitions/${id}`, init);
