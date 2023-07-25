import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getGhosts = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ghosts.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createGhost = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ghosts.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleGhost = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ghosts/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleGhost = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ghosts/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getGhosts,
  deleteSingleGhost,
  getSingleGhost,
  createGhost,
};
