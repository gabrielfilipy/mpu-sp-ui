import React, { useEffect, useState } from 'react';
import './TableMesa.scss';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { buscarMovimentosPorTipo } from '../Servico/ServiceTabela';
import { recebimentoDocumento } from '../Servico/documento.servico';
import Cookies from 'universal-cookie';
import { Pagination } from '@mui/material';
import Conteudo from '../../../compenentes-compartilhados/Conteudo/Conteudo';
import moment from 'moment';
import { filtro } from '../Servico/documento.servico';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface TableMesaProps {
  tipoDocumento: string;
  pessoaRecebedoraId?: number;
  subscritorId?: string;
  hasDocumentos?: any; // Propriedade para indicar se há documentos para exibir
}

const TableMesa: React.FC<TableMesaProps> = ({
  tipoDocumento,
  pessoaRecebedoraId,
  subscritorId,
  hasDocumentos, // Recebendo a propriedade hasDocumentos
}) => {
  const SIZE_LIST = 5;
  const [documentos, setDocumentos] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar exibição do alerta de documentos tramitados
  const cookies = new Cookies();

  /**PAGINAÇÃO */
  const [totalPage, setTotalPage] = useState(0);
  const [pageActual, setPageActual] = useState(0);
  const [numberPage, setNumberPage] = useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPageActual(page - 1);
  };

  async function fetchData() {
    try {
      if (!subscritorId) return;
      const _documentos = await buscarMovimentosPorTipo(subscritorId, pessoaRecebedoraId, tipoDocumento, pageActual, SIZE_LIST);

      // Filtrar documentos com base na última movimentação
      const filteredDocumentos = _documentos.content.filter(
        (documento: { movimentacoes: { typeMovement: string }[] }) => {
          const lastMovement = documento.movimentacoes[documento.movimentacoes.length - 1];
          return lastMovement.typeMovement === tipoDocumento;
        }
      );

      setDocumentos(filteredDocumentos);
      setNumberPage(_documentos.number);
      setTotalPage(_documentos.totalPages);

      // Verificar se há documentos tramitados
      const existemDocumentosTramitados = filteredDocumentos.some((documento: any) => documento.status === 'tramitado');
      setShowAlert(existemDocumentosTramitados);

      // Atualizar a propriedade hasDocumentos
      hasDocumentos = existemDocumentosTramitados;
    } catch (err) {
      if (err instanceof Error) Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error');
    }
  }

  useEffect(() => {
    fetchData();
  }, [subscritorId, pageActual, tipoDocumento]);

  function calculaData(date: Date): string {
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear();
    const hora = date.getUTCHours().toString().padStart(2, '0');
    const minuto = date.getUTCMinutes().toString().padStart(2, '0');
    const segundo = date.getUTCSeconds().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
  }

  async function handleRecebimentoDocumentClick(sigla: string) {
    try {
      const id = subscritorId || '';
      const result = await recebimentoDocumento(sigla, parseInt(id), pessoaRecebedoraId || 0);
      console.log('Documento recebido:', result);
    } catch (error) {
      Swal.fire('Erro!', 'Erro ao receber o documento', 'error');
    }
  }

  function calculaDiferenca(date: Date): string {
    const criacaoDoDocumento = moment(date);
    const agora = moment();

    const diffMinutes = agora.diff(criacaoDoDocumento, 'minutes');
    const diffHours = agora.diff(criacaoDoDocumento, 'hours');
    const diffDays = agora.diff(criacaoDoDocumento, 'days');

    if (diffDays > 3) {
      return calculaData(date);
    } else if (diffHours > 0) {
      return `Há ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
    } else if (diffMinutes > 0) {
      return `Há ${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''}`;
    } else {
      return 'Agora mesmo';
    }
  }

  return (
    <Conteudo>
      {documentos.length === 0 ? (
        <Alert severity="info">Nenhum documento encontrado.</Alert>
      ) : (
        <table className="AppTable">
          <thead>
            <tr>
              <th>Tempo</th>
              <th>Código do documento</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((documento: any, index: number) => (
              <tr key={index}>
                <td>{calculaDiferenca(new Date(documento.dateCreate))}</td>
                <td>
                  <Link
                    to={{ pathname: `/visualizar-documento/${documento.siglaMobil}` }}
                    onClick={() => {
                      if (documento.status === 'tramitado' || documento.status === 'recebido') {
                        handleRecebimentoDocumentClick(documento.codigoDocumento);
                      }
                    }}
                  >
                    {documento.siglaMobil}
                  </Link>
                </td>
                <td>{documento.documento.model.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="pagination-container">
        <Pagination count={totalPage} page={numberPage + 1} onChange={handleChange} variant="outlined" shape="rounded" color="primary" />
      </div>
    </Conteudo>
  );
};

export default TableMesa;
