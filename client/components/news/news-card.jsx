import React from 'react'
import { Card,Avatar } from 'antd';
const { Meta } = Card;


const NewsCard = ({title,avatar,description,loading,link,category})=>{
return (
      <a href={link} target='_blank'>
        <Card style={{ width: '70%', marginTop: 16 }} 
        loading={loading}
        hoverable
 
         >
    <Meta
      avatar={
        <Avatar src={avatar} />
      }
      title={title}
      description={description}
    />
    </Card>
        </a>
  
 
)



}

export default  NewsCard