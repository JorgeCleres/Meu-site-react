import React from 'react'
import './Experiencia.css'
import Linear from '../../components/Linear';

export default props => {

    return (
        <div className="exp" id="exp">
            <h2>Experiência</h2>
            <div className="exp-text">
                <div className="text">
                    <h3>Desenvolvedor front-end/web designer</h3>
                    <p>Minha jornada em TI começou cursando Análise e Desenvolvimento de Sistemas na FAPI, onde consegui toda a base pra construir minha carreira. Meu primeiro trabalho com TI foi na Prime Control atuando com testes de software, consegui bastante experiência lá e ampliei meus conhecimentos. Porém, desde a faculdade, me identifiquei com Front, então decidi sair da área de testes e conquistar meu espaço no desenvolvimento Front-end. No momento, além de vários projetos, estou aperfeiçoando meu conhecimento em JS, React.js e Nods.js. Seja bem vindo ao meu site, aqui você vai conhecer um pouco do meu trabalho.</p>
                </div>
                <div className="empresas">
                    <table>
                        <tr>
                            <th>Empresa</th>
                            <th>Cargo</th>
                            <th>Ano</th>
                        </tr>
                        <tr>
                            <td>Prime control</td>
                            <td>Assistente de Testes</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>Ummense</td>
                            <td>Estágio dev front</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>Artistic Sistemas</td>
                            <td>Desenvolvedor front</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>Agencia Alper</td>
                            <td>Desenvolvedor Web</td>
                            <td>2021</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="skills">
                <h3>My Skills</h3>
                <div className="progress_linha">
                    <div className="linha">
                        <h6>HTML</h6>
                        <Linear value={70} />
                    </div>

                    <div className="linha">
                        <h6>CSS</h6>
                        <Linear value={50} />
                    </div>
                
                    <div className="linha">
                        <h6>JAVASCRIPT</h6>
                        <Linear value={30} />
                    </div>

                    <div className="linha">
                        <h6>REACT</h6>
                        <Linear value={20} />
                    </div>

                    <div className="linha">
                        <h6>NODE</h6>
                        <Linear value={10} />
                    </div>

                    <div className="linha">
                        <h6>MYSQL</h6>
                        <Linear value={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}