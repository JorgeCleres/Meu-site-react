import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import Logo from '../components/LogoSVG'
 
export default props => {

    return (
        <div id="lateral">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#home">
                    <Logo></Logo>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(5,253,216)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#home">Inicio</a>
                    <a class="nav-item nav-link" href="#sobre">Sobre</a>
                    <a class="nav-item nav-link" href="#exp">Experiência</a>
                    <a class="nav-item nav-link" href="#portifolio">Portifólio</a>
                    <a class="nav-item nav-link" href="#servicos">Serviços</a>
                    <a class="nav-item nav-link" href="#contato">Contato</a>
                    </div>
                </div>
                </nav>
        </div>
    )
}
