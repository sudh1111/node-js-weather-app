const geocode=require('./geocode.js')
const forecast=require('./forecast.js')
const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const commonpath=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../template/views')
const partialspath=path.join(__dirname,'../template/partials')
const port=process.env.PORT ||3000

app.set('view engine','hbs')
app.set('views',viewspath)
app.use(express.static(commonpath))
hbs.registerPartials(partialspath)
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'sudhanshu'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send({
            error: "you must provide an address"
        })
    }
    geocode(req.query.address, (error,{latitude,longitude,location}={})=>
    {
    if(error)
        return res.send({error})
    forecast(latitude, longitude, (error,fdata)=>{
        
        if(error)
        return res.send({error})
        res.send({
            forecast:fdata,
            location,
            address:req.query.address
        })
        
    })
    })
   
})

app.get('/weather',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'sudhanshu'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Weather',
        helpmessage:'please click the above options',
        name: 'sudhanshu'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'Weather',
        name: 'sudhanshu'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'sudhanshu',
        erormessage: "help article not found"
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'sudhanshu',
        erormessage: "page not found"
        
    })
})
app.listen(port, ()=>{
    console.log('server is up on '+port)

})