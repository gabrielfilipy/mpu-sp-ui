import React, { useState } from 'react';

import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from "@mui/material";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import LogoHeader from "./File/LOGO.png.png"
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Header() {

    const [showMenu, setShowMenu] =  useState(true);
    
    return <div className="AppHeader">
            <Conteudo>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img className="Logo" src={LogoHeader} alt="logo do cliente" />
                    </Grid> 
                    <Grid item xs={6}>
                        <div className="menu">
                            <a href="#" onClick={() => setShowMenu(false)}>
                                <MenuIcon sx={{ color: 'white' }} fontSize="large" />
                            </a>
                        </div> 
                    </Grid> 
                </Grid>
            </Conteudo>

            <ul className="navbar-menu" hidden={showMenu}>
                <a href="#" onClick={() => setShowMenu(true)}>
                    <CloseIcon sx={{ color: 'white' }} fontSize="large" />
                </a>
                <li className="navbar-usuario">Loiane Moskviq</li>
                <li className="navbar-menu-item"><Link to="/mesa-virtual">Home</Link></li>  
                <li className="navbar-menu-item"><Link to="/documento">Criar documento</Link></li>
                <li className="navbar-menu-item"><Link to="/usuario">Cadastro usuário</Link></li>
            </ul>

        </div>
}

export default Header