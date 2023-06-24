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
import { type Disciplina } from "..";
import { Link } from "react-router-dom";

type Props = {
  disciplineList: Disciplina[];
  onDelete: (discipline: Disciplina) => Promise<void>;
};

const tableHead = ["Nome", "ID Curso", "Ações"];

export function DisciplineTable({ disciplineList, onDelete }: Props) {
  const isEmptyTable = disciplineList.length === 0;

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          {isEmptyTable
            ? "Nenhuma disciplina cadastrada"
            : "Lista de disciplinas cadastradas"}
        </TableCaption>

        <Thead>
          <Tr>
            {tableHead.map((thName) => (
              <Th key={thName}>{thName}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {disciplineList.map((discipline) => (
            <DisciplineDataRow
              key={discipline.id}
              discipline={discipline}
              onDelete={onDelete}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

type DisciplineDataRowProps = {
  discipline: Disciplina;
  onDelete: (discipline: Disciplina) => void;
};
export const DisciplineDataRow = ({
  discipline,
  onDelete,
}: DisciplineDataRowProps) => {
  return (
    <Tr>
      <Td>{discipline.nome}</Td>
      <Td>{discipline.curso_id}</Td>
      <Td>
        <HStack>
          <Button
            colorScheme="blue"
            as={Link}
            to={`/disciplina/atualizar/${discipline.id}`}
          >
            Editar
          </Button>
          <Button colorScheme="red" onClick={() => onDelete(discipline)}>
            Excluir
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
