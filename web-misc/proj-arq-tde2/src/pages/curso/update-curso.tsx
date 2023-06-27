import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "../../components/layout";
import { getCourseById, updateCourse } from "../../services/curso.ts";
import { type Curso } from "./index.tsx";
import { CourseForm } from "./components/course-form.tsx";

const emptyFormState: Curso = {
  id: 0,
  nome: "",
  universidade_id: NaN,
};

export function UpdateCurso() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [course, setCourse] = useState(emptyFormState);

  const onSubmit = async (course: Curso) => {
    await updateCourse(course);
    window.alert("Curso editado com sucesso");
    navigate("/curso");
  };

  const onCancel = () => navigate("/curso");

  useEffect(() => {
    getCourseById(Number(courseId)).then(setCourse);
  }, [courseId]);

  return (
    <div>
      <Layout title="Atualizar Curso">
        <CourseForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          initialState={course}
        />
      </Layout>
    </div>
  );
}
