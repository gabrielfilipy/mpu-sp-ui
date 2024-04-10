// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import './SubHeader.css' 
import { Avatar, Chip } from "@mui/material";
import Conteudo from "@compartilhados/Conteudo/Conteudo";
import Button from "@compartilhados/Button/Button";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router";

function SubHeader() {
    const [seconds, setSeconds] = useState(0);
    const location = useLocation();
    const [nameUser, setNameUser] = useState('');
    const cookies = new Cookies();
    const navigate = useNavigate();
    useEffect(() => {
        const timerId = setTimeout(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 10000); 
        const token = cookies.get('Token');
        if (!token) {
            return 
        }
        const object = JSON.parse(atob(token.split('.')[1]))
        setNameUser(object['nome']);
        return () => clearTimeout(timerId);
    }, [setNameUser]);

    function logout() {
        cookies.remove('Token', { path: '/' })
        navigate('/login');
    }

    function exibindoNavbar() {
        return location.pathname === '/login';
    }

    return <div className="AppSubHeader" hidden={ exibindoNavbar() }>
                <Conteudo>
                    <div className="MenuSubHeader">
                        <div className="Ambiente">
                            <p>Ambiente de <b>desenvolvimento</b></p>
                        </div>
                            
                        <div className="Container2">
                            <Chip className="Avatar" avatar={<Avatar sx={{ background: 'white' }}>{nameUser.substring(0,1).toUpperCase()}</Avatar>} label={nameUser} />
                            <Button onClick={() => logout()} value="Sair" color="danger" className="BotaoSair" />
                        </div> 
                    </div>
                </Conteudo>
        </div>
}

export default SubHeader