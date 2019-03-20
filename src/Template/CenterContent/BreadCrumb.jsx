import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

class BreadCrumb extends Component {
    constructor(props){
        super(props);
        this.state = {paginaAtual: this.props.pagina}
    }

    render(){
        return(
            <Breadcrumb style={{ margin: '16px 0', width: 100}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.paginaAtual}</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default BreadCrumb;