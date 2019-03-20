import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Row } from 'antd';

class Footer extends Component {
    render(){
        return(
            <Row align="middle" type="flex" justify="center" style={{ minHeight: 50 }}>
                Felipe Palombo ©2019
            </Row>                            
        );
    }
}

export default Footer;