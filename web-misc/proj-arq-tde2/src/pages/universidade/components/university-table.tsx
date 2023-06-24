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
import { type Universidade } from "..";
import { Link } from "react-router-dom";

type Props = {
  universityList: Universidade[];
  onDelete: (university: Universidade) => Promise<void>;
};

const tableHead = ["ID", "Nome", "Ações"];

export function UniversityTable({ universityList, onDelete }: Props) {
  const isEmptyTable = universityList.length === 0;

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          {isEmptyTable
            ? "Nenhuma universidade cadastrada"
            : "Lista de universidades cadastradas"}
        </TableCaption>

        <Thead>
          <Tr>
            {tableHead.map((thName) => (
              <Th key={thName}>{thName}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {universityList.map((university) => (
            <UniversityDataRow
              key={university.id}
              university={university}
              onDelete={onDelete}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

type UniversityDataRowProps = {
  university: Universidade;
  onDelete: (university: Universidade) => void;
};

export const UniversityDataRow = ({
  university,
  onDelete,
}: UniversityDataRowProps) => {
  return (
    <Tr>
      <Td>{university.id}</Td>
      <Td>{university.nome}</Td>
      <Td>
        <HStack>
          <Button
            colorScheme="blue"
            as={Link}
            to={`/universidade/atualizar/${university.id}`}
          >
            Editar
          </Button>
          <Button colorScheme="red" onClick={() => onDelete(university)}>
            Excluir
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
