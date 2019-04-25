import React, {Component} from 'react';
import { Layout, Col, Row, Typography } from 'antd';
import BreadCrumb from './BreadCrumb';
import TodoForm from '../Todo/todo-form'
import TodoList from '../Todo/todo-list'

const { Title } = Typography;

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
                            <Title>Tarefas</Title>
                        </Row>
                        <Row style={{marginTop:'20px'}}>
                            <TodoForm type="flex" justify="center" align="center"/>
                        </Row>    
                        <Row type="flex" justify="center" align="center" style={{marginTop:'20px'}}>
                            <TodoList />
                        </Row>    
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Tarefas;