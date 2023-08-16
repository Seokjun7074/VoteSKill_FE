import { loginInstance } from 'apis';

const userAPI = {
  signup: (nickname) => loginInstance.post('/users', { nickname }),

  kakaoLogin: (code) =>
    loginInstance.get('/oauth', {
      params: {
        code: code,
      },
    }),

  checkId: (username) =>
    loginInstance.get('/users/check', {
      params: {
        username,
      },
    }),

  getUserInfo: (userId) => loginInstance.get(`/users/${userId}`),

  editUserInfo: (userId) => loginInstance.put(`/users/${userId}`),
};

export default userAPI;
