import React from 'react'
import './Sobre.css'

export default props => {

    return (
        <div className="sobre" id="sobre">
            <div className='text'>
                <h2>Sobre</h2>
                <p>Oi! Eu sou o <strike>Goku</strike> Jorge Willian tenho 28 anos por enquanto, recém casado <strike>agora nem tão recém assim</strike>, natural da belíssima cidade de Pinhais, mas atualmente morando em Curitiba <strike>Pinhais > Curitiba</strike>. Um grande apreciador de churras, cerveja e metido a Gamer nas horas vagas <strike>o que raramente acontece.</strike></p>
            </div>
            
            <div className='icon'> 
                <a target="_blank" href="https://www.facebook.com/jorge.willian.311/">
                    <img src="../../icons/face.png" alt="facebook"></img>
                </a>
            
                <a target="_blank" href="https://www.instagram.com/jorge.cleres/">
                    <img src="../../icons/insta.png" alt=""></img>
                </a>
            
                <a target="_blank" href="https://github.com/JorgeCleres">
                    <img src="../../icons/github.png" alt=""></img>
                </a>
            
                <a target="_blank" href="https://www.behance.net/jorgewillian">
                    <img src="../../icons/behance.png" alt=""></img>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/jorge-cleres-b792aba6/">
                    <img src="../../icons/linkedin.png" alt=""></img>
                </a>
            </div>
        </div>
    )
}