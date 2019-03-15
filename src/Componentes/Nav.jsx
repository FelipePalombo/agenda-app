import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class Nav extends Component {
    render() {        
      return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
            </Menu>
        </Header>
      );
    }
  }

export default Nav;  