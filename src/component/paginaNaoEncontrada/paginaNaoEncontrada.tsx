import React from "react";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";

    function paginaNaoEncontrada() {

            return <Conteudo>
                <div className='AppCenterContext'>
                <img src="https://cdn-icons-png.flaticon.com/512/6261/6261498.png" alt="img" />
                <h1>Página não encontrada!</h1>
                <p>Você tentou acessar uma página que não existe.</p>
                </div>
                </Conteudo>
    }

export default paginaNaoEncontrada