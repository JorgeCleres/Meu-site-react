import React from 'react'
import './Contato.css'

export default props => {

    function enviar(e) {
        e.preventDefault()
        alert('Sem envio de email no momento')
    }
    
    return (
        <div className='contato' id="contato">
            <h2>Contato</h2>

            <form method="post" action="/" name="formulario">
                <input type="text" name="nome" placeholder="Nome"></input>
                <input type="email" name="assunto" placeholder="Assunto"></input>
                <textarea type="text" name="mensagem" placeholder="Mensagem"></textarea>
                <button type="submit" onClick={enviar}>Enviar</button>
            </form>

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
                
                    <a target="_blank" href="https://www.behance.net/jorgewillian" target="_b">
                        <img src="../../icons/behance.png" alt=""></img>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/jorge-cleres-b792aba6/">
                        <img src="../../icons/linkedin.png" alt=""></img>
                    </a>
                </div>
        </div>
    )
}