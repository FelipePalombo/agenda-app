import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import Nav from '../Template/Nav'
import Footer from '../Template/Footer'
import Content from '../Template/CenterContent/Content'
import { Layout, Col, Row } from 'antd'
//import Routes from './Routes'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: "Tarefas"}
    this.childHandler = this.childHandler.bind(this);
  }

  childHandler(dataFromChild){
    console.log('%cPrevious Parent State: ' + JSON.stringify(this.state) + dataFromChild, "color:orange");
    this.setState({
      data: dataFromChild
    }, () => console.log('Updated Parent State:', this.state.data));
  }
  render() {
    return (
      <Layout>
        <Row>
          <Nav action={this.childHandler}></Nav>        
          <Col>
            <Content pagina={this.state.data}></Content>
          </Col>  
          <Footer></Footer>
        </Row>          
      </Layout>
    );
  }
}

export default App;
