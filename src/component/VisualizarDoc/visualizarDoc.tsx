import React, { useEffect, useState } from "react";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { Grid } from "@mui/material";
import './VisualizarDoc.css';
import Funcoes from "./Funcoes/Funcoes";
import Box from "../../compenentes-compartilhados/Box/Box";
import { useParams } from "react-router";
import parse from 'html-react-parser';
import { buscarMobilPorSigla } from '../Documento/Service/Service';
import { listarCossignatario } from "../Incluir-Consignatario/Servico/ServiceT";
import { buscarUsuarioPorId } from "../Usuario/Servico/usuario.service";

interface Cossignatario {
  pessoaRecebedoraId: string;
  userDetails: {
    nome: string;
    matricula: string;
  };
}

function VisualizarDoc() {
  const { codigo } = useParams();
  const [html, setHtml] = useState("");
  const [lista, setLista] = useState<Cossignatario[]>([]);
  const [mobilId, setMobilId] = useState("");

  var codigoDocumento = codigo;

  useEffect(() => {
    localStorage.clear();
    buscarDocumento();
    listarCossignatarios();
  }, [codigoDocumento]);

  async function buscarDocumento() {
    try {
      const mobil = await buscarMobilPorSigla(codigoDocumento);
      if (mobil) {
        setMobilId(mobil.id);
        setHtml(mobil.documento.file);
      }
    } catch (error) {
      console.error('Erro ao buscar documento:', error);
    }
  }

  async function listarCossignatarios() {
    try {
      const list = await listarCossignatario(mobilId, "INCLUSAO_DE_COSIGNATARIO");
      const cossignatarios = await buscarDetalhesDosUsuarios(list.content);
      setLista(cossignatarios);
    } catch (error) {
      console.error('Erro ao buscar cosignatários:', error);
    }
  }

  async function buscarDetalhesDosUsuarios(cossignatarios: any[]) {
    return Promise.all(cossignatarios.map(async (item) => {
      const userDetails = await buscarUsuarioPorId(item.pessoaRecebedoraId);
      return { ...item, userDetails };
    }));
  }
  
  return (
    <Conteudo>
      <h2>{codigoDocumento}</h2>
      <Funcoes codigoDocumento={codigoDocumento} />
      <Grid container spacing={2}>
        <Grid item xs={7} sm={9}>
          <div className="VisuDoc">
            {parse(html)}
          </div>
        </Grid>
        <Grid item xs={5} sm={3}>
          <Box
            array={lista}
            titulo="Cossignatários"
            renderItem={(item, index) => (
              <div key={index} className="BoxListItem">
                <p>{item.userDetails.nome}</p>
                <p>{item.userDetails.matricula}</p>
              </div>
            )}
          />
        </Grid>
      </Grid>
    </Conteudo>
  );
}

export default VisualizarDoc;