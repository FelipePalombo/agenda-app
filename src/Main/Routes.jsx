import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Tarefas from '../Template/CenterContent/Tarefas'
import Sobre from '../Template/CenterContent/Sobre'

export default props => (
    <Router history={hashHistory}>
        <Route path="/tarefas" component={Tarefas}/>
        <Route path="/sobre" component={Sobre}/>
    </Router>
)