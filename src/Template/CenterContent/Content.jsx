import React, { Component } from 'react'
import { Layout } from 'antd';
import BreadCrumb from './BreadCrumb'

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {pagina: this.props.pagina};
    };
    render(){
        return(  
            <Layout style={{ padding: '0 50px', marginTop: 3 }}>
                <BreadCrumb pagina={this.state.pagina}></BreadCrumb>                
                <div style={{ background: '#fff', padding: 24, minHeight:610}}></div>
            </Layout>
        )
    }
}

export default Content;