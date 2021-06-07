import { Router } from "express"

import mapController from './controllers/mapController'

const router = Router()

router.use(mapController)

export default router
