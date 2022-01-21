import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/pages/Home'
import Sobre from '../views/pages/Sobre'
import Experiencia from '../views/pages/Experiencia'
import Portifolio from '../views/pages/Portifolio'
import Servicos from '../views/pages/Servicos'
import Contato from '../views/pages/Contato'
import './Content.css'

export default props => {

    return (
        <div className="content">
            <Switch>
                <Route path="/">
                    <Home></Home>
                    <Sobre></Sobre>
                    <Experiencia></Experiencia>
                    <Portifolio></Portifolio>
                    <Servicos></Servicos>
                    <Contato></Contato>
                </Route>
            </Switch>
        </div>
    )
}