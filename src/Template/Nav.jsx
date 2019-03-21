import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Layout, Menu} from 'antd';

class Nav extends Component {
    render() {        
      return (
        <Layout>
          <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['3']}
              style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="0"><img src="../Main/todologo.png"/>&nbsp;&nbsp;Agenda</Menu.Item>
            <Menu.Item key="1"><a onClick={() => this.props.action('tarefas')}>Tarefas</a></Menu.Item>
            <Menu.Item key="2"><a onClick={() => this.props.action('sobre')}>Sobre</a></Menu.Item>
          </Menu>
        </Layout>
      );
    }
  }

export default Nav;  