const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

const app = next({dev,dir:'./client'})


const handle = app.getRequestHandler()

app.prepare()
.then(()=>{
    const server = express()
    server.get('*', (req, res) => {
        return handle(req, res)
      })
      server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> listening on  http://localhost:${PORT}`)
      })
})
.catch((err)=>{
    console.error(err.stack)
    process.exit(1)
})