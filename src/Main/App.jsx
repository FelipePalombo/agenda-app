import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import Footer from '../Template/Footer';
import { Layout, Col, Row, Menu } from 'antd';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Tarefas from '../Template/CenterContent/Tarefas';
import Sobre from '../Template/CenterContent/Sobre';
import Home from '../Template/CenterContent/Home';
import BreadCrumb from './../Template/CenterContent/BreadCrumb';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {caminho: ""};
  }

  ajustarCaminho(data){
    this.setState({caminho: data});
  }
  
  render() {
    return (
      <Layout>
        <Router>
          <Row>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['3']}
              style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="0" onClick={() => this.ajustarCaminho("")}><NavLink to="/"><img src="../Main/todologo.png" alt="Agenda"/>&nbsp;&nbsp;</NavLink></Menu.Item>
                <Menu.Item key="1" onClick={() => this.ajustarCaminho("Tarefas")}><NavLink to="/tarefas" >Tarefas</NavLink></Menu.Item>
                <Menu.Item key="2" onClick={() => this.ajustarCaminho("Sobre")}><NavLink to="/sobre">Sobre</NavLink></Menu.Item>
            </Menu>
          </Row>
          <Row style={{ padding: '0 50px', marginTop: 3 }}>
            <Col>
              <BreadCrumb pagina={this.state.caminho}></BreadCrumb>
            </Col>                
            <Col>
              <div style={{ background: '#fff', padding: 24, minHeight:610}}>
                <Route path="/" render={() => <Home/>}/>    
                <Route path="/tarefas" render={() => <Tarefas/>}/>    
                <Route path="/sobre" render={() => <Sobre/>}/>
              </div>
            </Col>              
          </Row>
        </Router>
        <Row>
          <Footer></Footer>
        </Row>          
      </Layout>
    );
  }
}
