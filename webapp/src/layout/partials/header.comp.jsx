import React from 'react'
import { Menu } from 'antd';
import { LogoutOutlined, HomeOutlined } from '@ant-design/icons';
const Header = () => {

    const items = [
        {
          label: (
            <a href="#" >
              Dashboard
            </a>
          ),
          key: 'dashboard',
          icon: <HomeOutlined />,
        },
        {
          label:  (
            <a href="#" >
              Ticket
            </a>
          ),
          key: 'tickets'
        },
        {
            label:  (
                <a href="#" >
                  Logout
                </a>
              ),
            key: 'logout',
            icon: <LogoutOutlined />,
          },
    ]

  return (
    <Menu
    mode="horizontal"
    theme='light'
    style={{background:"steelblue"}}
    items={items}
    />
  )
}

export default Header