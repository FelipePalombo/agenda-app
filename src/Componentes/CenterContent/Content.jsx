import React, { Component } from 'react'
import { Layout } from 'antd';
import BreadCrumb from './BreadCrumb'

const { Content } = Layout;

class Contenta extends Component {
    render(){
        return(  
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <BreadCrumb></BreadCrumb>                
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
            </Content>
        )
    }
}

export default Contenta;