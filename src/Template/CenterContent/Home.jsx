import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd';
import BreadCrumb from './BreadCrumb';

class Home extends Component{
    render(){
        return(
        <Layout>
            <Col>
                <BreadCrumb caminho={this.props.caminho}></BreadCrumb>
            </Col>
            <Col>
                <div style={{ background: '#fff', padding: 24, minHeight:610}}>
                    <h1>a</h1>
                </div>
            </Col>
        </Layout>
        )
    }
}     

export default Home;