import React from 'react'
import Conteudo from "@compartilhados/Conteudo";
import './PaginaNaoEncontrada.css'

    function PaginaNaoEncontrada() {

            return <Conteudo>
                <div className='AppCenterContext'>
                <img src="https://static.thenounproject.com/png/1469633-200.png" alt="img: 404" />
                <h1>Página não encontrada!</h1>
                <p>Você tentou acessar uma página que não existe.</p>
                </div>
                </Conteudo>
    }

export default PaginaNaoEncontrada