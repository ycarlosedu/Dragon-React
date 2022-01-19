import { DragonProps } from '../Types/dragons';
import api from './api';

const handleApi = async (error: any) => {
  if (error.response === undefined || error.response.status === 500) {
    const reponse = {
      status: 404,
      title: 'Não foi possível acessar o servidor. Tente novamente mais tarde!',
    };
    return reponse;
  } else {
    return error.response;
  }
};

export const getDragons = async () => {
  try {
    const response = await api.get('/dragon');
    return response;
  } catch (error: any) {
    const response = handleApi(error);
    return response;
  }
};

export const getDragonsByID = async (id: number) => {
  try {
    const response = await api.get(`/dragon${id}`);
    return response;
  } catch (error: any) {
    const response = handleApi(error);
    return response;
  }
};

export const postDragons = async (dragon: DragonProps) => {
  try {
    const response = await api.post(`/dragon`, dragon);
    return response;
  } catch (error: any) {
    const response = handleApi(error);
    return response;
  }
};

export const putDragons = async (id: number, dragon: DragonProps) => {
  try {
    const response = await api.put(`/dragon${id}`, dragon);
    return response;
  } catch (error: any) {
    const response = handleApi(error);
    return response;
  }
};

export const deleteDragons = async (id: number) => {
  try {
    const response = await api.delete(`/dragon${id}`);
    return response;
  } catch (error: any) {
    const response = handleApi(error);
    return response;
  }
};
