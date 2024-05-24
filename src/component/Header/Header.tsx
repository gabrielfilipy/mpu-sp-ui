import React, { useEffect, useState } from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { Link, useLocation } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';

function Header() {
    const location = useLocation();
    const cookies = new Cookies();
    const [showMenu, setShowMenu] =  useState(true);
    
    useEffect(() => {
        const token = cookies.get('Token');
        if (!token) {
            return 
        }
    }, []);

    function exibindoNavbar() {
        return location.pathname === '/login' || location.pathname === '/nao-autorizado';
    }    

    return <div className="AppHeader" hidden={ exibindoNavbar() }>
            <Conteudo>
                <div className='Container'>
                    <div className='Logo'>
                        <Link to="/mesa-virtual"><b>SIM!</b></Link>
                    </div>
                    <div className="menu">
                        <Button href="#" onClick={() => setShowMenu(false)}><MenuIcon sx={{ color: 'white' }} fontSize="large" /></Button>
                    </div> 
                </div>
            </Conteudo>

            <ul className="navbar-menu" hidden={showMenu}>

               <button  className='buttondoheader' onClick={() => setShowMenu(true)}> 
                    <CloseIcon sx={{ color: 'white' }} fontSize="small" />
                </button> 

                <li className="navbar-usuario">Loiane Moskviq</li>
                <li className="navbar-menu-item"><Link to="/mesa-virtual">Home</Link></li>  
                <li className="navbar-menu-item"><Link to="/documento">Criar documento</Link></li>
                <li className="navbar-menu-item"><Link to="/listar-usuario">Cadastro usuário</Link></li>
                <li className="navbar-menu-item"><Link to="/cadastro-setor">Cadastro Setor</Link></li>
                <li className="navbar-menu-item"><Link to={"/permissoes-usuario"}>Permissoes para usuário</Link></li>
                <li className="navbar-menu-item"><Link to="/cadastro-orgao">Cadastro Órgão</Link></li>

            </ul>

        </div>
}

export default Header