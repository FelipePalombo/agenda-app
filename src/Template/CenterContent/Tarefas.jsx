import React, {Component} from 'react';
import { Layout, Col, Row } from 'antd';
import BreadCrumb from './BreadCrumb';
import TodoForm from '../Todo/todo-form'
import TodoList from '../Todo/todo-list'

class Tarefas extends Component{
    render(){
        return(
            <Layout>
                <Col>
                    <BreadCrumb caminho={this.props.caminho}></BreadCrumb>
                </Col>
                <Row style={{minHeight: 800, background: '#fff'}}>
                    <Col span={40} style={{ padding: 24}}>
                        <Row type="flex" justify="center" align="center">
                            <h1>Tarefas</h1>
                        </Row>
                        <Row type="flex" justify="center" align="center" style={{marginTop:'20px'}}>
                            <TodoForm/>
                        </Row>    
                        <Row type="flex" justify="center" align="center" style={{marginTop:'20px'}}>
                            <TodoList/>
                        </Row>    
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Tarefas;