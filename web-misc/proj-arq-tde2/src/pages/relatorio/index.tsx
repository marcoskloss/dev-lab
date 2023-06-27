import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { Layout } from "../../components/layout"
import { getCsvReport, getTableReport } from "../../services/report"
import { useEffect, useState } from "react"
import { type Universidade } from "../universidade"
import { type Curso } from "../curso"
import { type Aluno } from "../aluno"

type TableData = {
  student: Aluno;
  university: Universidade;
  course: Curso
}

export function Relatorio() {
  const [data, setData] = useState<TableData[]>([])
  
  const downloadReport = async () => {
    const csv = await getCsvReport();
    const csvBlob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = 'relatorio.csv';
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
  }

  useEffect(() => {
    getTableReport().then(setData);
  }, [])

  return (
    <Layout title="Relatório" headerAction={<Button ml='auto' colorScheme="blue" onClick={downloadReport}>Baixar relatório</Button>}>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Aluno</Th>
              <Th>Curso</Th>
              <Th>Universidade</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map(row => (
              <Tr>
                <Td>{row.student.nome}</Td>
                <Td>{row.course.nome}</Td>
                <Td>{row.university.nome}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  )
}