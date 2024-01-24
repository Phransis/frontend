import { Badge, Image, Space, Typography } from 'antd'
import {BellFilled, MailOutlined} from '@ant-design/icons';
import React from 'react'
import image1 from './assets/taikai.png'

const yourName = "Handla"

function AppHeader() {

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (timeOfDay < 12){
      timeOfDay = "morning"
  }
    else if(timeOfDay >= 12 && hours < 17){
      timeOfDay = "afternoon"
    }
    else{
      timeOfDay = "evening"
    }

  return (
    <div className='AppHeader'>
      <Image src= {image1} alt="logo" className="logo"
      width={100} style={{marginLeft:"auto"}}></Image>
      <Typography.Title>{yourName}`s Dashboard</Typography.Title>
      <Space>
        <h4>Good {timeOfDay} {yourName}</h4>
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
