import { Controller } from "../types"

const controller: Controller = (req, res) => {
    return res.send({ message: "Hello World!" })
}

export default controller