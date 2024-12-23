import express from 'express'
import { Register } from './controler.js'




const router=express.Router()



router.post('/data01',Register)




export default router