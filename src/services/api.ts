import axios, { AxiosResponse } from 'axios';
import axiosRetry, { isRetryableError } from 'axios-retry';
import mitt, { Handler } from 'mitt';

type Events = {
  response: AxiosResponse;
};

export const emitter = mitt<Events>();

const api = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1',
});

axiosRetry(api, {
  retries: 3,
  retryCondition: isRetryableError,
});

// REQUEST INTERCEPTOR
api.interceptors.response.use(
  (response) => {
    emitter.emit('response', response);
    return response;
  },
  (error) => {
    emitter.emit('response', error.response);

    if (!error.response || error.response.status >= 500) {
      const errorMessage =
        'Não foi possível conectar-se neste momento. Tente novamente mais tarde!';

      const serverErrorResponse = { title: errorMessage };

      return Promise.reject(serverErrorResponse);
    }

    return Promise.reject(error.response);
  },
);

export function onResponse(callback: Handler<AxiosResponse>) {
  emitter.on('response', callback);

  return () => {
    emitter.off('response', callback);
  };
}

export default api;
