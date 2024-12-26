import express from 'express'
import { saveData } from './Controler/Excel.js'
import { Register } from './Controler/Log-Reg.js'




const router=express.Router()



router.post('/data01',Register)
router.post('/excelData',saveData)




export default router