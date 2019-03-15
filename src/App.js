import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'
import Content from './Componentes/CenterContent/Content'
import { Layout } from 'antd'

class App extends Component {
  render() {
    return (
      <Layout className="">
        <Nav></Nav>        
        <Content></Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default App;
