import { Badge, Image, Space, Typography } from 'antd'
import {BellFilled, MailOutlined} from '@ant-design/icons';
import React from 'react'

const yourName = "Handla"

function AppHeader() {
  return (
    <div className='AppHeader'>
      <Image src= "./assets/taikai.png" alt='logo'></Image>
      <Typography.Title>{yourName}`s Dashboard</Typography.Title>
      <Space>
        <Badge count ={15}>
        <MailOutlined style={{fontSize:24}}>Testing</MailOutlined>
        </Badge>
        <Badge count ={150}>
        <BellFilled style={{fontSize:24}}></BellFilled>
        </Badge>
      </Space>
    </div>
  )
}

export default AppHeader
