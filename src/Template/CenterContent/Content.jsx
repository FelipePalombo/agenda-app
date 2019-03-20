import React, { Component } from 'react'
import { Layout } from 'antd';
import BreadCrumb from './BreadCrumb'

class Content extends Component {
    render(){
        return(  
            <Layout style={{ padding: '0 50px', marginTop: 3 }}>
                <BreadCrumb pagina="Tarefas"></BreadCrumb>                
                <div style={{ background: '#fff', padding: 24, minHeight:610}}></div>
            </Layout>
        )
    }
}

export default Content;