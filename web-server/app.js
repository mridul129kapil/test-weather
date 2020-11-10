const path = require('path');
const hbs = require('hbs');
const express = require('express');
const geocode = require('../utils/geocode.js');


const app = express()

const publicDirectory = path.join(__dirname,'/public')

const viewsPath = path.join(__dirname,'/views')

app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.static(publicDirectory))

app.get('',(req,res)=>{
    res.render('index')
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'provide the address!'
        })
    }    
        geocode(req.query.address,(error,data)=>{
            if(error)
            {
                return res.send({error})
            }
            res.send(data)

        })
    
})

app.listen(3000,()=>{
    console.log("Server Started!")
})
