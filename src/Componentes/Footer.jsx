import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Layout } from 'antd';

const FooterAntd = Layout

class Footer extends Component {
    render(){
        return(
            <FooterAntd style={{ textAlign: 'center', minHeight: 400 }}>
                Felipe Palombo ©2019
            </FooterAntd>                            
        );
    }
}

export default Footer;