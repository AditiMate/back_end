import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//json data accept
app.use(express.json({limit: "16kb"}))
//encrypted url
app.use(express.urlencoded({extended: true, limit: "16kb"}))
//file accepted
app.use(express.static("public"))
app.use(cookieParser())

export { app }