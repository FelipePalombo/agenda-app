import React, {Component} from 'react';
import { Form, Icon, Input, Button, Layout, Col, Row } from 'antd';

class TodoAForm extends Component{     
    constructor(props){
        super(props);        
        this.type = this.props.type;
        this.justify = this.props.justify;
        this.align = this.props.align;  

        this.state = {tarefa: ''};
        
        this.columnStyle = { '' : '' };
        if(this.type === 'flex'){
            this.columnStyle = { flexDirection : 'column' };                    
        }
        
        console.log(this.columnStyle);
    }

    handleInput(evt){
        console.log('evento: ' + evt.target.value);
        this.setState({tarefa : evt.target.value});
        console.log(this.state.tarefa);        
    }

    handleAdding(){
        console.log(this.state.tarefa);    
        //this.props.handleAdd(this.state.tarefa);
        //this.props.handleAdd('aaa');
    }

    render(){      
        return(   
            <Row type={this.type} justify={this.justify} align={this.align} style={this.columnStyle}>                 
                {/* <Col span={12} >} */}
                    <Form layout="inline" onSubmit={this.handleSubmit} style={{ background: '#fff'}} >
                        <Form.Item>
                            <Input 
                                style={{width: 500}} size="large" 
                                prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)'}} />} 
                                type="text" placeholder="Nova tarefa" 
                                onChange={evt => this.handleInput(evt)}
                                />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                icon="plus"
                                shape="circle"
                                size="large"
                                onClick={() => this.handleAdding()}
                            >
                            </Button>
                        </Form.Item>
                    </Form>
                {/* </Col> */}
            </Row>
            
        )
    }        
}            

export default TodoAForm;