import Constants from './Constants';

export default function api(path: string, params: object | null, method: string, token: string | null) {
  let options;

  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Token ${token}` }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  };

  return fetch(Constants.BASE_URL + path, options).then(resp => resp.json()).then(json => json).catch(error => error);
}