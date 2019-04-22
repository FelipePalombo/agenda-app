import React, { Component } from 'react'
import Tarefas from './Tarefas'
import Sobre from './Sobre'
import Home from './Home'
import { Layout } from 'antd';
import BreadCrumb from './BreadCrumb'
import { isNullOrUndefined } from 'util';

class Content extends Component {    
    constructor(props){
        super(props);
        this.state = {value: <Tarefas/>}    
        this.ajustarConteudo = this.ajustarConteudo.bind(this);     
    }

    ajustarConteudo(e){
        console.log('AAAAA');
        console.log(e.target.value);
        if(isNullOrUndefined(e.target.value)){
            if(e.target.value === 'Tarefas'){
                this.setState({value: <Tarefas/>});
                console.log('a');
            }else if(e.target.value === 'Tarefas'){
                this.setState({value: <Sobre/>});
            }    
        }else{
            this.setState({value: <Home/>});
        }
    }

    render(){        
        return(  
            <Layout style={{ padding: '0 50px', marginTop: 3 }}>
                <BreadCrumb pagina={this.props.pagina}></BreadCrumb>
                <input onChange={this.ajustarConteudo} value={this.props.pagina}></input>               
                <div style={{ background: '#fff', padding: 24, minHeight:610}}>
                    
                </div>
                
            </Layout>
        )
    }
}

export default Content;