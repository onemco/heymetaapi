const PORT = process.env.PORT || 5000
const express = require('express')
var cors = require('cors')
const axios = require('axios')
const getMetaData = require('metadata-scraper')

const app=express()

app.use(cors({ origin: ['https://www.onemco.com.au', 'https://www.onemco.com']}))

app.get('/:url',(req,res)=>{
    const dr= req.params
    const ab = 'https://' + dr.url
    const url = ab
    getMetaData(url).then((data) => {
        res.json(data)
    }).catch(error=>console.log('505'))     
})

app.get('/:url/:suburl',(req,res)=>{
    const dr= req.params
    const subfurl= dr.suburl
    const ab = 'https://' + dr.url +'/'+subfurl
    const url = ab
    getMetaData(url).then((data) => {
        res.json(data)
    }).catch(error=>console.log('505')) 
})

app.get('/:url/:suburl/:subturl',(req,res)=>{
    const dr= req.params
    const ab = 'https://' + dr.url +'/'+dr.suburl + '/' +dr.subturl
    const url = ab
    getMetaData(url).then((data) => {
        res.json(data)
    }).catch(error=>console.log('505')) 
      
    app.get('/:url/:suburl/:subturl/:subfurl',(req,res)=>{
        const dr= req.params
        const ab =  'https://' + dr.url +'/'+dr.suburl + '/' +dr.subturl +'/'+dr.subfurl
        const url = ab
        getMetaData(url).then((data) => {
            res.json(data)
        }).catch(error=>console.log('505')) 
        
    })

    app.get('/:url/:suburl/:subturl/:subfurl/:submurl',(req,res)=>{
        const dr= req.params
        const ab =  'https://' + dr.url +'/'+dr.suburl + '/' +dr.subturl +'/'+dr.subfurl +'/'+dr.submurl
        const url = ab
        getMetaData(url).then((data) => {
            res.json(data)
        }) 
        
    }).catch(error=>console.log('505')) 
    
})

app.listen(PORT,()=>console.log(`server running on PORT $(PORT)`))

