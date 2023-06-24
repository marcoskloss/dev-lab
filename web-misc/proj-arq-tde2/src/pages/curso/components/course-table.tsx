import {
  Button,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { type Curso } from "..";
import { Link } from "react-router-dom";

type Props = {
  courseList: Curso[];
  onDelete: (curso: Curso) => Promise<void>;
};

const tableHead = ["Nome", "ID Universidade", "Ações"];

export function CourseTable({ courseList, onDelete }: Props) {
  const isEmptyTable = courseList.length === 0;

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          {isEmptyTable
            ? "Nenhum curso cadastrado"
            : "Lista de cursos cadastrados"}
        </TableCaption>

        <Thead>
          <Tr>
            {tableHead.map((thName) => (
              <Th key={thName}>{thName}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {courseList.map((curso) => (
            <CursoDataRow key={curso.id} curso={curso} onDelete={onDelete} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

type CursoDataRowProps = {
  curso: Curso;
  onDelete: (curso: Curso) => void;
};

const CursoDataRow = ({ curso, onDelete }: CursoDataRowProps) => {
  return (
    <Tr>
      <Td>{curso.nome}</Td>
      <Td>{curso.universidade_id}</Td>
      <Td>
        <HStack>
          <Button
            colorScheme="blue"
            as={Link}
            to={`/curso/atualizar/${curso.id}`}
          >
            Editar
          </Button>
          <Button colorScheme="red" onClick={() => onDelete(curso)}>
            Excluir
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
