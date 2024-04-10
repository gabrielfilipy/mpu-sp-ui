import React from 'react'
import Conteudo from "@compartilhados/Conteudo";
import './NaoAutorizado.css'

    function NaoAutorizado() {

            return <Conteudo>
                <div className='AppCenterContext'>
                    <img src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2022/03/Error-401-unauthorized.webp" alt="img: 404" />
                    <h1>Você não possui autorização para acessar essa página!</h1>
                    <p>Você tentou acessar uma página a qual não lhe é permitida. Converse com o seu Gestor para lhe dar acesso.</p>
                </div>
                </Conteudo>
    }

export default NaoAutorizado