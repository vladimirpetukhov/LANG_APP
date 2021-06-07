
import dotenv from "dotenv"
dotenv.config()

export const host = process.env.HOST || "localhost"
export const serverPort = process.env.SERVER_PORT || "8080"


export enum Environment {
    Production,
    Development
}
export const currentEnviroment =
    process.env.NODE_ENV === "development"
        ? Environment.Development
        : Environment.Production

const apiRoute = "/api"

export const mapRoute = `${apiRoute}/map`

