import fetch from 'node-fetch';

export const context = () => {
  return {
    getUsers: (path = '/') => {
      const url = 'http://localhost:3000/users';
      return fetch(url + path);
    },
  };
};
