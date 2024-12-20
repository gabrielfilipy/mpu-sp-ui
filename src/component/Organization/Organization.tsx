import React, { useEffect, useState } from "react";
import Form from "../../shared-component/Form/Form";
import Input from "../../shared-component/Input/Input";
import Conteudo from "../../shared-component/Conteudo/Conteudo";
import Button from "../../shared-component/Button/Button";
import './Organization.css'
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { registry, search, listCity } from "./Service/Service";
import Grid from "../../shared-component/Grid/Grid";
import Autocomplete from "../../shared-component/Autocomplete/Autocomplete";
import { preparedObject, City } from "./OrgaoModel";

const initialFormState = {
    id: '',
    name: '',
    phone: '',
    email: '',
    address: {
        cep: '',
        city: {
            id: ''
        }
    }
}

function Organization() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [ form, setForm ] = useState(initialFormState)
    const [ citys, setCitys ] = useState<City[]>([]);
    const [ citySelected, setCitySelected ] = useState('');

    const handleOptionSelect = (option: any) => {
        setCitySelected(option.id)
    };

    const handleRedirectHome = () => {
        navigate('/home-orgao')
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setForm(prevForm => {
            if (name === "cep") {
                return {
                    ...prevForm,
                    address: {
                        ...prevForm.address,
                        cep: value // Gabriel Filipy: Atualiza corretamente o campo 'cep'
                    }
                };
            }
            return {
                ...prevForm,
                [name]: value
            };
        });
    };
    
    const handleSubmit = () => {
        try {
            const obj = preparedObject(form, citySelected, citys);
            if(obj == null) {
                return;
            }
            registry(obj)
            Swal.fire({
                title: `${id ? 'Edição' : 'Cadastro'}`,
                text: `O Órgão ${obj?.name?.toUpperCase()} foi ${id ? 'editado' : 'cadastrado'} com sucesso`,
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/home-orgao');
            });
        } catch(err) {
            if (err instanceof Error) 
                Swal.fire('Erro!', err.message, 'error')
        }
    }

    async function fetchData() {
        try {
            const _data = await listCity();
            setCitys(_data)
        } catch (err) {
            if (err instanceof Error) {
                Swal.fire('Erro!', 'Erro ao se conectar com o servidor!', 'error');
            }
        }
    }

    function searchOrganization() {
        if (id) {
            const _response = search(id);
            _response.then(data => {
                console.log(data)
                setForm({
                    id: data.id || '',
                    name: data.name || '',
                    phone: data.phone || '',
                    email: data.email || '',
                    address: data.address
                });
                setCitySelected(data.address.city.id);
            }).catch(error => {
                Swal.fire("Erro!", error.message, "error");
            });
        }
    }

    useEffect(() => {
        searchOrganization();
        fetchData()
        // eslint-disable-next-line
    }, [id])

    return <Conteudo >
        <Form 
            title={`${id ? 'Edição' : 'Cadastro'} de Órgão`}
            onSubmit={handleSubmit} >
            <Grid columns={2} gap="24px">
                <Autocomplete
                    label="Cidade"
                    options={citys}
                    value={form.address.city.id}
                    onOptionSelect={handleOptionSelect}
                />
                <Input 
                    value={form.address.cep}
                    name="cep"
                    onChange={handleInputChange}
                    label="CEP" 
                    required/>
                <Input 
                    value={form.email}
                    name="email"
                    onChange={handleInputChange}
                    label="E-MAIL" 
                    required/>
                <Input 
                    value={form.phone}
                    name="phone"
                    onChange={handleInputChange}
                    label="Telefone" 
                    required/>
                <div className="clear"></div>
            </Grid>
            
            <Input 
                value={form.name}
                name="name"
                onChange={handleInputChange}
                label="NOME" 
                required/>
            
            <div className="MaxSizeButton">
                <Grid columns={2} gap="5px">
                    <Button>Cadastrar</Button>
                    <Button 
                        onClick={handleRedirectHome}
                        color="grey">Cancelar</Button>
                </Grid>
            </div>
        </Form>
    </Conteudo>
}

export default Organization