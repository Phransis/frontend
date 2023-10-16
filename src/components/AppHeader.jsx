import { Badge, Image, Space, Typography } from 'antd'
import {BellFilled, MailOutlined} from '@ant-design/icons';
import React from 'react'
import image1 from './assets/taikai.png'

const yourName = "Handla"

function AppHeader() {
  return (
    <div className='AppHeader'>
      <Image src= {image1} alt="logo" className="logo"
      width={100} style={{marginLeft:"auto"}}></Image>
      <Typography.Title>{yourName}`s Dashboard</Typography.Title>
      <Space>
        <Badge count ={15}>
        <MailOutlined style={{fontSize:24}}>Testing</MailOutlined>
        </Badge>
        <Badge count ={150} dot>
        <BellFilled style={{fontSize:24}}></BellFilled>
        </Badge>
        {/* <img src="" alt='pic'></img> */}
      </Space>
    </div>
  )
}

export default AppHeader
