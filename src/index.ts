import dotenv from "dotenv"

import Server from "./server"

dotenv.config()

;(async () => {
    const port = process.env.PORT ? Number(process.env.PORT) : undefined
    const server = new Server({ port: port })

    await server.start()
})();