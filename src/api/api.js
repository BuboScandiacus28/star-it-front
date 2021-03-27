import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://star-it-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  async (response) => {
    if (response.config.url.split('/')[2] === 'signin') {
      localStorage.setItem('star_it_access_token', response.data.accessToken);
      localStorage.setItem('star_it_refresh_token', response.data.refreshToken);
    }

    return response;
  },
  (error) => error.response,
);

instance.interceptors.request.use(
  (request) => {
    const config = request;

    if (
      config.url.split('/')[2] !== 'signin'
      || config.url.split('/')[2] !== 'signup'
    ) {
      if (config.url.split('/')[2] === 'refresh') {
        config.headers.Authorization = `${localStorage.getItem('star_it_refresh_token')}`;
      } else {
        config.headers.Authorization = `${localStorage.getItem('star_it_access_token')}`;
      }
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export const authAPI = {
  path: 'api/auth/',
  signin(email, password) {
    return instance.get(`${this.path}signin`,
      {
        params: {
          mac: 'E1:8C:24:6D:F9:85',
          email,
          password,
        },
      })
      .then((response) => response.data);
  },
  signup(name, email, password) {
    return instance.post(`${this.path}signup`, JSON.stringify({
      payload: {
        mac: 'E1:8C:24:6D:F9:85',
        name,
        email,
        password,
      },
    }))
      .then((response) => response.data);
  },
  me() {
    return instance.get(`${this.path}me`, {
      params: {
        mac: 'E1:8C:24:6D:F9:85',
      },
    })
      .then((response) => response.data);
  },
  refresh() {
    return instance.get(`${this.path}refresh`, {
      params: {
        mac: 'E1:8C:24:6D:F9:85',
      },
    })
      .then((response) => response.data);
  },
};

export const businessAPI = {
  path: 'api/business/',
  search(pageNumber, value) {
    return instance.get(`${this.path}search`, {
      params: {
        mac: 'E1:8C:24:6D:F9:85',
        pageNumber,
        value,
      },
    })
      .then((response) => response.data);
  },
  get(id) {
    return instance.get(`${this.path}${id}`, {
      params: {
        mac: 'E1:8C:24:6D:F9:85',
      },
    })
      .then((response) => response.data);
  },
  getAll(pageNumber) {
    return instance.get(`${this.path}`, {
      params: {
        mac: 'E1:8C:24:6D:F9:85',
        pageNumber,
      },
    })
      .then((response) => response.data);
  },
  add(name, image) {
    return instance.post(`${this.path}`, JSON.stringify({
      payload: {
        mac: 'E1:8C:24:6D:F9:85',
        name,
        image,
      },
    }))
      .then((response) => response.data);
  },
  update(name, ...params) {
    let payload = {
      name,
    };

    if (params.image) {
      payload = {
        ...payload,
        image: params.image,
      };
    }

    return instance.put(`${this.path}`, JSON.stringify({
      payload: {
        mac: 'E1:8C:24:6D:F9:85',
        ...payload,
      },
    }))
      .then((response) => response.data);
  },
};

export const feedbackAPI = {
  path: 'api/feedback/',
};
