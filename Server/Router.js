import express from 'express'
import profileData from './Controller/Profile.js'




const router=express.Router()


router.post('/profile',profileData)


export default router