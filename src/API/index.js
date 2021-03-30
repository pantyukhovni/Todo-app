import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const todoAPI = {
  getTodo(userId) {
    return axiosInstance
      .get(`todos?userId=${userId}`)
      .then((response) => response.data);
  }
};
