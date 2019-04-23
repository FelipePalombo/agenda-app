import React, { Component } from 'react';
import './style.css';
import "antd/dist/antd.css";
import Footer from '../Template/Footer';
import { Layout, Col, Row, Menu } from 'antd';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Tarefas from '../Template/CenterContent/Tarefas';
import Sobre from '../Template/CenterContent/Sobre';
import Home from '../Template/CenterContent/Home';

export default class App extends Component {  
  render() {
    return (
      <Layout style={{backgroundColor: "#00000"}}>
        <Router>
          <Row>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['3']}
              style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="0"><NavLink to="/home"><img src="../Main/todologo.png" alt="Agenda"/>&nbsp;&nbsp;</NavLink></Menu.Item>
                <Menu.Item key="1"><NavLink to="/tarefas" >Tarefas</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/sobre">Sobre</NavLink></Menu.Item>
            </Menu>
          </Row>
          <Row style={{ padding: '0 50px', marginTop: 3 }}>
            <Route path="/home" render={() => <Home caminho=""/>}/>    
            <Route path="/tarefas" render={() => <Tarefas caminho="Tarefas"/>}/>    
            <Route path="/sobre" render={() => <Sobre caminho="Sobre"/>}/>               
            {/*<Route path="*" render={() => <Home caminho=""/> } /> */}
          </Row>
        </Router>
        <Row>
          <Footer></Footer>
        </Row>          
      </Layout>
    );
  }
}
