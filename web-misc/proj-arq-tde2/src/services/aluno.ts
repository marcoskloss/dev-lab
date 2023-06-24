import { type Aluno } from "../pages/aluno";
import { api } from "./api";

export const getAllStudents = async (): Promise<Aluno[]> => {
  const response = await api.get("/aluno");
  return response.data;
};

export const deleteStudent = async (
  current: Aluno[],
  deletedStudentId: number
): Promise<Aluno[]> => {
  await api.delete(`/aluno/${deletedStudentId}`);
  return current.filter((student) => student.id !== deletedStudentId);
};

export const updateStudent = async (student: Aluno): Promise<void> => {
  await api.put(`/aluno/${student.id}`, student);
};

export const saveStudent = async (
  student: Omit<Aluno, "id">
): Promise<void> => {
  await api.post(`/aluno`, student);
};

export const getStudentById = async (studentId: number): Promise<Aluno> => {
  const response = await api.get(`/aluno/${studentId}`);
  return response.data;
};
