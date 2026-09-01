import request from '../utils/request.js';

class AuthAPI {
  async register(userData) {
    return request.post('/api/auth/register', userData);
  }

  async login(credentials) {
    return request.post('/api/auth/login', credentials);
  }
}

export default new AuthAPI();
