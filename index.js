const PORT = 8080
const express = require('express')
var cors = require('cors')
const axios = require('axios')
const getMetaData = require('metadata-scraper')

const app=express()

app.use(cors())

app.get('/:url',(req,res)=>{
    const dr= req.params
    const ab = 'https://' +dr.url
    const url = ab
    
    
    getMetaData(url).then((data) => {
        res.json(data)
    })
      
    
    
    
})
app.listen(PORT,()=>console.log(`server running on PORT $(PORT)`))

