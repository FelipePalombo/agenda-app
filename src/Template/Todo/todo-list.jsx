import React, { Component } from 'react';
import { Col, Row, List } from 'antd';


export default class TodoList extends Component {
    constructor(props){
        super(props);        
        this.type = this.props.type;
        this.justify = this.props.justify;
        this.align = this.props.align;  
        
        this.columnStyle = { '' : '' };
        if(this.type === 'flex'){
            this.columnStyle = { flexDirection : 'column' };                    
        }
        
        console.log(this.columnStyle);
    }

    render(){
        return(
            <Row type={this.type} justify={this.justify} align={this.align} style={this.columnStyle}>
                <Col span={12} >
                    <List 
                        size="large"
                        header={<div>Tarefas</div>}
                        bordered
                        dataSource={this.props.lista}
                        renderItem={item => (<List.Item>{item}</List.Item>)}                

                    />
                </Col>
            </Row>                  
        )
    }    
}