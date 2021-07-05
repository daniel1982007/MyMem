import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/posts.js'

const app = express()

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

dotenv.config()

app.use('/posts', router)
app.get('/', (req, res) => res.send('hello, my dairy project'))

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Your app is running at port: ${PORT}`)))
    .catch(error => console.log(error.message))

mongoose.set('useFindAndModify', false)