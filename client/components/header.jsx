'use strict'
import React from 'react'
import {Layout,Menu} from 'antd'
import Link from 'next/link'
const { Header } = Layout;
const {Item} = Menu
import {NAVBAR_ITEMS} from './../consts/index'


const HeaderComponent = ()=>{
  
return <Header className="header">
  <div className="logo" />
  <Menu theme="dark" mode="horizontal"  style={{ float:'right' }} defaultSelectedKeys={['1']}>
{
  NAVBAR_ITEMS.map((item,index)=>{
  return <Item key={index}> {item.isLink 
            ? <Link href={item.link}>{item.displayName}</Link>
            : item.displayName}
          </Item>
  })
}
  </Menu>
</Header>
}

export default HeaderComponent