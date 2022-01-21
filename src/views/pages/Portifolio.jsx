import React from 'react'
import './Portifolio.css'
import Image from '../../components/Image'

export default props => {

    return (
        <div class="portifolio" id="portifolio">
            <h2>Portifólio</h2>
            <div class="imagens">
                <div className="image">
                    <Image caminho={'../../imagens/Agenda x.jpg'} alt={'Agenda x'} />
                </div>

                <div className="image">
                    <Image caminho={"../../imagens/Artistic.jpg"} alt={"Artistic"} />
                </div>

                <div className="image">
                    <Image caminho={"../../imagens/BcPrime.jpg"} alt={"BC Prime"} />
                </div>

                <div className="image">
                    <Image caminho={"../../imagens/Endlich.jpg"} alt={"Endlich"} />
                </div>

                <div className="image">
                    <Image caminho={"../../imagens/inoxSolution.jpg"} alt={"Inox Solution"} />
                </div>

                <div className="image">
                    <Image caminho={"../../imagens/Pansystem.jpg"} alt={"Pansystem"} />
                </div>

                <div className="image">
                    <Image caminho={"../../imagens/Rcleres.jpg"} alt={"Rcleres"} />
                </div>

                <div className="image">
                    <Image caminho={"../../imagens/tecdix.jpg"} alt={"Tecdix"} />
                </div>

            </div>
        </div>
    )
}