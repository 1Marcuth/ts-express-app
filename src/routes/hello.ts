import { Router } from "express"

import controller from "../controllers/hello"

const router = Router()

router.get("/hello", controller)

export default router