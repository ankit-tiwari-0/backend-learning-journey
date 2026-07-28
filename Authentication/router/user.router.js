import {Router} from 'express'
import { login, logout, signup } from '../controller/user.controller.js'


const router = Router()



//Routes


router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)




export default router