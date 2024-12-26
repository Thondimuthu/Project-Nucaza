import express from 'express'
import router from './Router.js';
import cors from 'cors'
import ConnectData from './db.Config/db.config.js';


const app=express();
const port =3000;
const DBURL='mongodb://localhost:27017/Employee'

app.use(cors())
app.use(express.json())
app.use('api/v1/data',router)




ConnectData(DBURL).then(()=>{
    app.listen(port, ()=>console.log(`connecting http://localhost:${port}`)
    )}).catch(()=>{
    console.log("Error Problem");
    
})