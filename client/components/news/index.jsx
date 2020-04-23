'use strict'
import React from 'react'
import {useState} from 'react'
import {useFetcher} from './../../costumHooks/index'
import NewsCard from './news-card'

const NewsComponent = (props)=>{
const API_KEY= process.env.API_KEY
const API_HOST = process.env.API_HOST
const URL  = `${API_HOST}/news?category=general&token=${API_KEY}`
let {data,loading} = useFetcher(URL)

return (
    <>
  {
     loading ? <NewsCard loading={loading}/>:   data.map(({category,image,headline,summary,url,id})=>{

          return (
            <NewsCard
            loading={loading}
            title={headline}
            description={summary}
            key={id}
            avatar={image}
            link={url}
            category={category}
            />
          )
      })
  }

</>
)
}


export default NewsComponent