import { useNavigate } from "react-router-dom";

import { Layout } from "../../components/layout";
import { saveCourse } from "../../services/curso";
import { type Curso } from ".";
import { CourseForm } from "./components/course-form";

const formEmptyState: Curso = {
  id: 0,
  nome: "",
  universidade_id: "",
};

export function CreateCurso() {
  const navigate = useNavigate();

  const onSubmit = async (course: Curso) => {
    await saveCourse({
      nome: course.nome,
      universidade_id: course.universidade_id,
    });
    window.alert("Curso criado com sucesso");
    navigate("/curso");
  };

  const onCancel = () => navigate("/curso");

  return (
    <div>
      <Layout title="Cadastro de Curso">
        <CourseForm
          initialState={formEmptyState}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </Layout>
    </div>
  );
}
