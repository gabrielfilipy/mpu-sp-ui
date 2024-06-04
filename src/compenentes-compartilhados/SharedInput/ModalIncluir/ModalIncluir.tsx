import React, { useState } from 'react';
import { Modal, Box, Grid, Pagination } from '@mui/material';
import './ModalIncluir.css';
import Conteudo from '../../Conteudo/Conteudo';
import Form from '../../Form/Form';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import SharedInput from '../SharedInput';

interface ModProps {
  open: boolean;
  handleClose: () => void;
}

const ModalIncluir: React.FC<ModProps> = ({ open, handleClose }) => {

       /**PAGINAÇÃO */
       const [totalPage, setTotalPage] = useState(0);
       const [pageActual, setPageActual] = useState(0);
       const [numberPage, setNumberPage] = useState(0);
       const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
              setPageActual(page - 1)
          };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        <Conteudo>
          <Form titulo={"Dados do Usuário"}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input 
                  label="Nome ou Matrícula" />
              </Grid>
              <Grid item xs={12}>
                <SharedInput label="Lotação" />
              </Grid>
              <Grid item xs={12}>
                <Input 
                  label="Órgão" />
              </Grid>
               
            </Grid>
              <br></br>
              <Grid container spacing={2}>
              <Grid item xs={3}>
                <Button>Pesquisar</Button>
              </Grid>
              </Grid>
        
            <table className="AppTable">
            <thead>
              <tr>
                <th>Matrícula</th>
                <th>Nome</th>
                <th>Lotação</th>
                <th>Função</th>
                <th>Fim de Vigência</th>
              </tr>
            </thead>
          </table>
          <div className="pagination-container">
            <Pagination 
                count={totalPage} 
                page={numberPage + 1} 
                onChange={handleChange} 
                variant="outlined" 
                shape="rounded" 
                color='primary'/>
           </div>
          </Form>
        </Conteudo>
      </Box>
    </Modal>
  );
};

export default ModalIncluir;
