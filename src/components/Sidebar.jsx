import { Menu, } from 'antd'
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, 
  SettingOutlined, SolutionOutlined,MessageOutlined,EditOutlined,FileDoneOutlined, ReadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import React from 'react'


function Sidebar() {

  const navigate = useNavigate()

  return (
    <div className='Sidebar'>
      <Menu

onClick={(item) =>{
  //item.key
  navigate(item.key)
}}

      items ={[
        {
          label: "Dashboard",
          icon:<AppstoreOutlined/>,
          key:"/dashbaord"
        },
        
        {
          label: "Inventory",
          icon:<ShopOutlined/>,
          key:'/inventory'
      },
      {
          label: "Orders",
          icon:<ShoppingCartOutlined />,
          key:'/orders'
      },

      {
          label: "Customers",
          icon:<UserOutlined />,
          key:'/customers'
      },
       {
          label: "About",
          icon:<ReadOutlined />,
          key:'/messages'
      },

 
       {
          label: "Settings",
          icon:<SettingOutlined />,
          key:'/settings'
      },
      ]}
      ></Menu>
    </div>
  )
}

export default Sidebar
