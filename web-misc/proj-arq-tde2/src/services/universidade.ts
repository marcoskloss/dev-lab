import { type Universidade } from "../pages/universidade";
import { api } from "./api";

export const getAllUniversities = async (): Promise<Universidade[]> => {
  const response = await api.get("/universidade");
  return response.data;
};

export const deleteUniversity = async (
  current: Universidade[],
  deletedId: number
): Promise<Universidade[]> => {
  await api.delete(`/universidade/${deletedId}`);
  return current.filter((university) => university.id !== deletedId);
};

export const updateUniversity = async (
  university: Universidade
): Promise<void> => {
  await api.put(`/universidade/${university.id}`, university);
};

export const saveUniversity = async (
  university: Omit<Universidade, "id">
): Promise<void> => {
  await api.post(`/universidade`, university);
};

export const getUniversityById = async (id: number): Promise<Universidade> => {
  const response = await api.get(`/universidade/${id}`);
  return response.data;
};
