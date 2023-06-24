import { type Disciplina } from "../pages/disciplina";
import { api } from "./api";

export const getAllDisciplines = async (): Promise<Disciplina[]> => {
  const response = await api.get("/disciplina");
  return response.data;
};

export const deleteDiscipline = async (
  current: Disciplina[],
  deletedDisciplineId: number
): Promise<Disciplina[]> => {
  await api.delete(`/disciplina/${deletedDisciplineId}`);

  const updatedDisciplines = current.filter(
    (discipline) => discipline.id !== deletedDisciplineId
  );
  return updatedDisciplines;
};

export const updateDiscipline = async (
  discipline: Disciplina
): Promise<void> => {
  await api.put(`/disciplina/${discipline.id}`, discipline);
};

export const saveDiscipline = async (
  discipline: Omit<Disciplina, "id">
): Promise<void> => {
  await api.post(`/disciplina`, discipline);
};

export const getDisciplineById = async (
  disciplineId: number
): Promise<Disciplina> => {
  const response = await api.get(`/disciplina/${disciplineId}`);
  return response.data;
};
