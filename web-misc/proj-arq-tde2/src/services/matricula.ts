import { type Matricula } from "../pages/matricula";
import { api } from "./api";

export const getAllEnrollments = async (): Promise<Matricula[]> => {
  const response = await api.get("/matricula");
  return response.data;
};

export const deleteEnrollment = async (
  current: Matricula[],
  deletedEnrollmentId: number
): Promise<Matricula[]> => {
  await api.delete(`/matricula/${deletedEnrollmentId}`);
  return current.filter((enrollment) => enrollment.id !== deletedEnrollmentId);
};

export const updateEnrollment = async (
  enrollment: Matricula
): Promise<void> => {
  await api.put(`/matricula/${enrollment.id}`, enrollment);
};

export const saveEnrollment = async (
  enrollment: Omit<Matricula, "id">
): Promise<void> => {
  await api.post(`/matricula`, enrollment);
};

export const getEnrollmentById = async (
  enrollmentId: number
): Promise<Matricula> => {
  const response = await api.get(`/matricula/${enrollmentId}`);
  return response.data;
};
