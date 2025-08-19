import { Router } from "express";
import { userController } from "./auth.controller";
import IsAdmin from "../../middlewares/IsAdmin";




const router = Router()

router.get('/',userController.userInfo)
router.post('/create', userController.createUser)
router.get('/checkAdmin',IsAdmin)
export const UserRoute = router;