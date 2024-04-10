import React, { useEffect } from "react";
import './TableMesa.scss'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TableMesa() {

    const docs = [
        {
            tempo: '2 horas',
            sigla: 'MEM-5546',
            modelo: 'Memorando'
        },
        {
            tempo: '5 horas',
            sigla: 'PROC-2334',
            modelo: 'Processo'
        },
        {
            tempo: '1 minuto',
            sigla: 'OFC-1245',
            modelo: 'Ofício'
        }
    ]


    async function fetchData() {
        try {
        //const _documentos = await listarDocumentos()
        //const _documentos = ['']
        //setDocumentos(_documentos)
        //console.log(_documentos)
        } catch(e) {
            error()
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const error = () => {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Falha ao tentar uma comunicação com o Servidor!'
          })

    }

    return <table className="AppTable">
        <thead>
            <tr>
                <th>Tempo</th>
                <th>Código do documento</th>
                <th>Modelo</th>
            </tr>
        </thead>
        <tbody>
            
                {

                    docs.map(( listValue:any, index:any ) => {
                        return (
                        <tr key={index}>
                            <td>{listValue.tempo}</td>
                            <td><Link to={
                                {pathname: `/visualizar-documento/${listValue.sigla}`}
                                } >{listValue.sigla}</Link></td>
                            <td>{listValue.modelo}</td>
                        </tr>
                        );
                    })

                }
                
            
        </tbody>
    </table>
}

export default TableMesa