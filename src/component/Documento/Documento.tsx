import React from "react";
import Form from "../../compenentes-compartilhados/Form/Form";
import Input from "../../compenentes-compartilhados/Input/Input";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";

function Documento() {

    return <Conteudo >
        <Form titulo="Criar documento">
    
            <Input label="Responsável pela assinatura"/>
            
        </Form>
    </Conteudo>

}

export default Documento