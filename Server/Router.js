import express from 'express'
import {saveData } from './Controler/Excel.js'
import { Register } from './Controler/Log-Reg.js'
import { getProfiles } from './Controler/Profile.js'



const router=express.Router()



router.post('/data01',Register)
router.post('/excelData',saveData)
router.post('/profile',getProfiles)


export default router