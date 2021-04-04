import express from 'express'
import dotenv from 'dotenv'

import bodyParser from 'body-parser'
import cors from 'cors'

import routes from './routes'
import database from './config/database'
import './sequelize';

const app = express()

dotenv.config()

// ! Create Table
 database
   .sync({ force: true })
   .then((res) => console.log(res))
   .catch((err) => console.log(err))

app.use(cors())
app.use(bodyParser.json())

app.use('/api', routes)

const port = process.env.API || 3000
app.listen(3000, () => console.log(`App running on port ${port}`))
