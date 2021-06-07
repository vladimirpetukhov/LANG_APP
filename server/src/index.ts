import express from "express"
import { addAsync } from "@awaitjs/express"
import bodyParser from "body-parser"
import { serverPort } from "./config"
import router from "./routes"
import passport from "passport"
import cookieParser from "cookie-parser"
import * as cors from "cors"

const app = addAsync(express())


//options for cors midddleware
const options: cors.CorsOptions = {
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token"
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    
    preflightContinue: false
}

//use cors middleware
app.use(cors.default(options))

app.use(router)



;(async () => {
    
    const server = app.listen(serverPort, () => {
        console.log(`Server is listening on port ${serverPort}`)
    })
    // Data migrator only remove timeout !!!!
    // Remove this code in production.
    server.setTimeout(2147483647) // :OOOOO
})()
