import axios from 'axios';
import apiKeys from '../../apiKeys.json';

import pinsData from './pinsData';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getSingleBoard = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

const createBoard = (newBoard) => axios.post(`${baseUrl}/boards.json`, newBoard);

const updateBoard = (boardId, editedBoard) => axios.put(`${baseUrl}/boards/${boardId}.json`, editedBoard);

const deleteBoard = (boardId) => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/boards/${boardId}.json`)
    .then(() => {
      pinsData.deleteBoardPins(boardId)
        .then(() => resolve())
        .catch((err) => reject(err));
    });
});

export default {
  getBoardsByUid, getSingleBoard, deleteBoard, createBoard, updateBoard,
};
