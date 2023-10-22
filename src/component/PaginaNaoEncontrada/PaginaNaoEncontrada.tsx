import React from 'react'
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";

    function PaginaNaoEncontrada() {

            return <Conteudo>
                <div className='AppCenterContext'>
                <img src="https://static.thenounproject.com/png/1469633-200.png" alt="img: 404" />
                <h1>Página não encontrada!</h1>
                <p>Você tentou acessar uma página que não existe.</p>
                <p>Ou então está em uma página desatualizada.</p>
                <p>Por Favor retorne à tela home.</p>
                </div>
                </Conteudo>
    }

export default PaginaNaoEncontrada