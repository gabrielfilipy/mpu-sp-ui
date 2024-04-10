import React from "react";
import './Form.scss'

declare interface FormProps {
    titulo?: string
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children: JSX.Element | JSX.Element[]
}

const Form: React.FC<FormProps> = (props) => {
    
    const preventSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();//Não recarregar aplicao após submit.
        props.onSubmit && props.onSubmit(event);//Se existir um 'onSubmit' então executa.
    }

    return <form className="AppForm" onSubmit={preventSubmit}>
            {
                props.titulo && <div className="Titulo">
                    { props.titulo }
                </div>
            }
            { props.children }
        </form>

}

export default Form