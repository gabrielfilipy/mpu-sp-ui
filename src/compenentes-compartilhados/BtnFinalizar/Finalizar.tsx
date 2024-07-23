import React, { useEffect, useState, useRef } from "react";
import { buscarDocumento, filtroBoolean, finalizarDocumento } from "../../component/Mesa/Servico/documento.servico";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import Button from "../Button/Button";

interface FinalizarProps {
  codigoDocumento?: string;
}
interface DocumentoData {
  subscritorId: number;
}

const Finalizar: React.FC<FinalizarProps> = (props) => {
  const [typeMovement, setTypeMovement] = useState('');
  const [showFinalizar, setShowFinalizar] = useState(true);
  const [mobilId, setMobilId] = useState<number>(0);
  const { sigla } = useParams<{ sigla: string }>();
  const [documentoData, setDocumentoData] = useState<any>({})
  const codigoDocumento = sigla || "";
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const handleFinalizar = async () => {
    Swal.fire({
      title: 'Você tem certeza de que deseja finalizar o documento?',
      text: "Você não vai poder reverter essa ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, Finalizar!',
      cancelButtonText: 'Cancelar Finalização!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (props.codigoDocumento && documentoData.subscritorId) {
          try {
            const _doc = await finalizarDocumento(props.codigoDocumento, documentoData.subscritorId);
            setShowFinalizar(false);
            
            Swal.fire('Finalizado!', `O documento ${_doc.mobilModel.siglaMobil} foi finalizado.`, 'success').then(() => {
              navigate(`/visualizar-documento/${_doc.mobilModel.siglaMobil}`);
            });

          } catch (error) {
            Swal.fire('Erro', 'Erro ao finalizar documento', 'error');
          }
        }
      }
    });
  };


  useEffect(() => {
    if (props.codigoDocumento) {
      fetchDocumento(props.codigoDocumento);
    }
  }, [props.codigoDocumento]);

  const fetchDocumento = async (codigoDocumento: string) => {
    try {
      const documento = await buscarDocumento(codigoDocumento);
      setDocumentoData({ ...documento, subscritorId: documento.subscritorId });
    } catch (error) {
      console.error('Erro ao buscar documento:', error);
    }
  };

  useEffect(() => {
    if (mobilId && typeMovement) {
      filtroBoolean(mobilId, typeMovement)
        .then(isFinalized => setShowFinalizar(!isFinalized))
        .catch(error => console.error('Erro ao buscar dados ou tipo de movimentação diferente:', typeMovement, error));
    }
  }, [mobilId, typeMovement]);

  return (
    showFinalizar ? (
      <button
        className="AppButton AppButtonPrimary"
        onClick={handleFinalizar}
        style={{ marginRight: '5px' }}
      >
        Finalizar
      </button>
    ) : null
  );
}
export default Finalizar;
