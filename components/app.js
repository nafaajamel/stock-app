import React from 'react'
import { Layout } from 'antd';
const {  Content } = Layout;

import Header from './header'
import Footer from './footer'
import Breadcrump from './breadcrumb'
import Sider from './sider'


const App = ({children})=>{

return <Layout style={{minHeight:'100vh'}}>
<Header />
<Layout>
<Sider/>
  <Layout style={{ padding: '0 24px 24px' }}>
    <Breadcrump/>
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      height:'100%'
      }}
    >
      {children}
    </Content>
  <Footer />
  </Layout>
</Layout>
</Layout>
}

export default App