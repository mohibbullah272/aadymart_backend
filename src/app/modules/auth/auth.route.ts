import { Router } from "express";
import { userController } from "./auth.controller";
import IsAdmin from "../../middlewares/IsAdmin";

const router = Router();

router.get('/', userController.userInfo); // Protect user list
router.post('/create', userController.createUser);
router.get('/checkAdmin',IsAdmin);
router.patch('/:userId/make-admin',  userController.makeAdmin); // New route
router.patch('/:userId/remove-admin',  userController.removeAdmin); // New route

export const UserRoute = router;