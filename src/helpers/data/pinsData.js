import axios from 'axios';
import apiKeys from '../../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const createPin = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);

const deleteBoardPins = (boardId) => new Promise((resolve, reject) => {
  getPins(boardId)
    .then((pins) => {
      const allPromises = [];
      pins.forEach((pin) => {
        allPromises.push(deletePin(pin.id));
      });
      Promise.all(allPromises)
        .then(resolve())
        .catch((err) => reject(err));
    });
});

export default {
  getPins, deletePin, deleteBoardPins, createPin,
};
