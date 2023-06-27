import { Button } from "@chakra-ui/react"
import { Layout } from "../../components/layout"
import { getCsvReport } from "../../services/report"

export function Relatorio() {
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

  return (
    <Layout title="Relatório">
      <Button onClick={downloadReport}>Gerar</Button>
    </Layout>
  )
}