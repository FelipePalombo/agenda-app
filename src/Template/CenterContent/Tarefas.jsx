import React, {Component} from 'react';
import { Layout, Col, Row, Typography } from 'antd';
import BreadCrumb from './BreadCrumb';
import TodoForm from '../Todo/todo-form'
import TodoList from '../Todo/todo-list'

const { Title } = Typography;


class Tarefas extends Component{
    constructor(props){
        super(props);
        this.state = {tarefas : [
            'Felipe',
            'Test'
        ]};
        this.handleAdd = this.handleAdd.bind(this);        
    }

    handleAdd(tarefa){
        console.log('handleAdd: ' + tarefa);
        this.setState(state => {
            const tarefas = state.tarefas.push(tarefa);
            return{
                ...tarefas,
            };
        });
    }

    render(){
        return(
            <Layout>
                <Col>
                    <BreadCrumb caminho={this.props.caminho}></BreadCrumb>
                </Col>
                <Row style={{minHeight: 800, background: '#fff'}}>
                    <Col span={40} style={{ padding: 24}}>
                        <Row type="flex" justify="center" align="middle">
                            <Title>Tarefas</Title>
                        </Row>
                        <Row style={{marginTop:'20px'}}>
                            <TodoForm type="flex" justify="center" align="middle" handleAdd={this.handleAdd} />
                        </Row>    
                        <Row style={{marginTop:'20px'}}>
                            <TodoList lista={this.state.tarefas} type="flex" justify="center" align="middle" />
                        </Row>    
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Tarefas;