import React, {Component} from 'react';
import { Form, Icon, Input, Button, Layout, Col, Row } from 'antd';

class TodoAForm extends Component{     
    constructor(props){
        super(props);

        this.type = this.props.type;
        this.justify = this.props.justify;
        this.align = this.props.align;
    }

    render(){
        return(   
            <Row type={this.type} justify={this.justify} align={this.align}>
                <Col span={48}> 
                    <Form layout="inline" onSubmit={this.handleSubmit} style={{ background: '#fff'}} >
                        <Form.Item>
                            <Input style={{ width: 600}} size="large" prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)'}} />} type="text" placeholder="Nova tarefa" />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                icon="plus"
                                shape="circle"
                                size="large"
                            >
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>    
            </Row>
            
        )
    }        
}            

export default TodoAForm;