'use strict'
import React,{useState} from 'react'
import { Layout, Menu } from 'antd'
import {SIDEBAR_ITEMS} from './../consts/index'
import Link from 'next/link'
const { Sider } = Layout;
const { SubMenu,Item } = Menu;

const  SiderComponent = ()=>{

let [collapsed,setCollapsed] = useState(true)

    return  <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
    <Menu theme="dark" /*defaultSelectedKeys={['2']}*/ mode="inline">
     {
       SIDEBAR_ITEMS.map((item,i)=>{
         return (
         <Item  key={i} >
          <Link href={item.link}>
          <a>
           {item.icon}
          <span>{item.displayName}</span>
          </a>
          </Link>
         </Item>
          )
       })
     }
    </Menu>
  </Sider>
}

 export default  SiderComponent