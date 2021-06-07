import { MapServices } from './../services/mapService';
import { Router } from "@awaitjs/express"
import { mapRoute } from "../config"
import { parseString} from 'xml2js'

const router = Router()

router.getAsync(`${mapRoute}`, async (req, res) => {

   const capabilities = await (await MapServices.getWmsCaps()).data;

    //res.set('Content-Type', 'application/xml')
    res.json(capabilities)
})



export default router