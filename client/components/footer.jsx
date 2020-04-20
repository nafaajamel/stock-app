'use strict'
import React from 'react'
import {Layout} from 'antd'
import {HeartOutlined} from '@ant-design/icons'
const { Footer } = Layout;

const FooterComponent = ()=>{
return <Footer style={{ textAlign: 'center' }}>
    made with <HeartOutlined  style={{color:'#ff0027'}} />  by jamel nafaa
    </Footer>
}

export default FooterComponent