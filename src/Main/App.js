import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import Nav from '../Template/Nav'
import Footer from '../Template/Footer'
import Content from '../Template/CenterContent/Content'
import { Layout, Col, Row } from 'antd'
//import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Layout>
        <Row>
          <Nav></Nav>        
          <Col>
            <Content></Content>
          </Col>  
          <Footer></Footer>
        </Row>          
      </Layout>
    );
  }
}

export default App;
