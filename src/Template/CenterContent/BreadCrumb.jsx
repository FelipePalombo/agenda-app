import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
class BreadCrumb extends Component {
    render(){
        return(
            <Breadcrumb style={{ margin: '16px 0', width: 100}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.caminho}</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default BreadCrumb;