import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { router } from './routers/routes'
import { dbInst } from './configs/database'

const app = express()

// server
app.listen(4000, ()=>{
    console.log('server is started at port 4000')
})

// middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// dbConnection
dbInst.authenticate().then((dbConnection)=>{
    console.log('db Connected Successfully.')
    dbInst.sync({alter: true}).then((tableCreation)=>{
        console.log('Table Created Successfully.')
    }).catch((error)=>{
        console.log('error in creating the Table ::', error)
    })
}).catch((error)=>{
    console.log('error in connecting to db', error)
})

// routes
app.use(router)

