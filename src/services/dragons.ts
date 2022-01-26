import { DragonProps } from '../Types/dragons';
import api from './api';

export const getDragons = async () => {
  return await api.get('/dragon');
};

export const getDragonsByID = async (id: number | undefined | string) => {
  return await api.get(`/dragon/${id}`);
};

export const postDragons = async (dragon: DragonProps) => {
  return await api.post(`/dragon`, dragon);
};

export const putDragons = async (
  id: number | undefined | string,
  dragon: DragonProps,
) => {
  return await api.put(`/dragon/${id}`, dragon);
};

export const deleteDragons = async (id: number | undefined) => {
  return await api.delete(`/dragon/${id}`);
};
