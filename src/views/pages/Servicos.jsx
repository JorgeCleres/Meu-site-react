import React from 'react'
import './Servicos.css'
import Card from '../../components/Card'

export default props => {
    return (
        <section className="servicos" id="servicos">
            <div class="container">
                <h2>Serviços</h2>
                <div className="cards">
                    <Card
                        title="Dev Front"
                        text="Hello, glad you are here. I am kunaal and today we will see how to make an awesome neon card with an awesome card hover effect using only CSS. You can see demo below."
                    ></Card>

                    <Card
                        title="Web Designer"
                        text="Hello, glad you are here. I am kunaal and today we will see how to make an awesome neon card with an awesome card hover effect using only CSS. You can see demo below."
                    ></Card>

                    <Card
                        title="Dev Back"
                        text="Hello, glad you are here. I am kunaal and today we will see how to make an awesome neon card with an awesome card hover effect using only CSS. You can see demo below."
                    ></Card>
                </div>
            </div>
        </section>
    )
}