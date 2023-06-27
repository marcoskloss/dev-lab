import { Curso } from "../pages/curso";
import { Universidade } from "../pages/universidade";
import { getAllStudents } from "./aluno";
import { getCourseById } from "./curso";
import { getUniversityById } from "./universidade";

export const getCsvReport = async () => {
  const rows = [];
  const header = 'Aluno;Curso;Universidade';

  rows.push(header);

  const students = await getAllStudents();

  const coursesById = new Map<number, Curso>();
  const universitiesById = new Map<number, Universidade>();

  for await (const student of students) {
    let course: Curso;
    let university: Universidade;

    if (coursesById.has(student.curso_id)) {
      course = coursesById.get(student.curso_id) as Curso;
    } else {
      course = await getCourseById(student.curso_id);
      coursesById.set(course.id, course);
    }

    if (universitiesById.has(course.universidade_id)) {
      university = universitiesById.get(course.universidade_id) as Universidade;
    } else {
      university = await getUniversityById(course.universidade_id);
      universitiesById.set(university.id, university);
    }
    

    const row = `${student.nome};${course.nome};${university.nome}`;
    rows.push(row);
  }

  return rows.join('\n');
}

export const getTableReport = async () => {
  const rows = [];

  const students = await getAllStudents();

  const coursesById = new Map<number, Curso>();
  const universitiesById = new Map<number, Universidade>();

  for await (const student of students) {
    let course: Curso;
    let university: Universidade;

    if (coursesById.has(student.curso_id)) {
      course = coursesById.get(student.curso_id) as Curso;
    } else {
      course = await getCourseById(student.curso_id);
      coursesById.set(course.id, course);
    }

    if (universitiesById.has(course.universidade_id)) {
      university = universitiesById.get(course.universidade_id) as Universidade;
    } else {
      university = await getUniversityById(course.universidade_id);
      universitiesById.set(university.id, university);
    }
    

    rows.push({ student, course, university });
  }

  return rows;
}