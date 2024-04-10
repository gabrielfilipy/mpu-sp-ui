import React from "react";
import './Conteudo.css'

declare interface ConteudoProps {
    children?: React.ReactNode
}

const Conteudo: React.FC<ConteudoProps> = (props) => {

    return <div className="AppConteudo">
            { props.children }
        </div>

}

export default Conteudo