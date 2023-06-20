import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Layout } from "../../components/layout";
import { CursoDataRow } from "./components/table";
import { useNavigate } from "react-router-dom";

export type Curso = {
  nome: string;
  universidade_id: string;
};

const cursoTableHead = ["Nome", "ID Universidade", "Ações"];
const cursoRows = [
  { nome: "Curso X", universidade_id: "Uni_XPTO" },
  { nome: "Curso Y", universidade_id: "Uni_XPTO" },
  { nome: "Curso Z", universidade_id: "Uni_XPTO" },
  { nome: "Curso 1", universidade_id: "Uni_XPTO" },
  { nome: "Curso 2", universidade_id: "Uni_XPTO" },
];

type CursoFormActionsProps = { onClickNewCurso: () => void };
const CursoFormActions = ({ onClickNewCurso }: CursoFormActionsProps) => (
  <Button colorScheme="green" ml="auto" onClick={onClickNewCurso}>
    Novo Curso
  </Button>
);

export function Curso() {
  const navigate = useNavigate()

  const onAddNewCurso = () => {
    navigate('/curso/novo')
  };

  const onDeleteCurso = (curso: Curso) => {
    alert("onDeleteCurso " + curso.nome);
  };

  const onUpdateCurso = (curso: Curso) => {
    const cursoId = 1; // curso.id
    navigate(`/curso/atualizar/${cursoId}`)
  };

  const isEmptyTable = cursoRows.length === 0;

  return (
    <Layout
      title="Cursos"
      headerAction={<CursoFormActions onClickNewCurso={onAddNewCurso} />}
    >
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            {isEmptyTable
              ? "Nenhum curso cadastrado"
              : "Lista de cursos cadastrados"}
          </TableCaption>

          <Thead>
            <Tr>
              {cursoTableHead.map((thName) => (
                <Th>{thName}</Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {cursoRows.map((curso) => (
              <CursoDataRow
                curso={curso}
                onDelete={onDeleteCurso}
                onUpdate={onUpdateCurso}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
