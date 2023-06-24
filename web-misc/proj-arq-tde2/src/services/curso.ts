import { type Curso } from "../pages/curso";
import { api } from "./api";

export const getAllCourses = async (): Promise<Curso[]> => {
  const response = await api.get("/curso");
  return response.data;
};

export const deleteCourse = async (
  current: Curso[],
  deletedCourseId: number
): Promise<Curso[]> => {
  await api.delete(`/curso/${deletedCourseId}`);
  const updatedCourses = current.filter(
    (course) => course.id !== deletedCourseId
  );
  return updatedCourses;
};

export const updateCourse = async (course: Curso): Promise<void> => {
  await api.put(`/curso/${course.id}`, course);
};

export const saveCourse = async (course: Omit<Curso, "id">): Promise<void> => {
  await api.post(`/curso`, course);
};

export const getCourseById = async (courseId: number): Promise<Curso> => {
  const response = await api.get(`/curso/${courseId}`);
  return response.data;
};
