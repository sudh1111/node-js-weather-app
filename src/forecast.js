const request=require('request')
const forecast=(lat,long,callback)=>{
    const url='https://api.darksky.net/forecast/2defc22348634dc6f54f5057f76e7f3f/'+lat+','+long
    request({url: url, json:true},(error,{body})=>{
        if(error)
        {
        callback('connection not',undefined)
        }
        else if(body.error)
        {
        callback('enter prpoerly',undefined)
        }
        else
        {
            callback(undefined,'It is '+body.currently.summary+' throughout the day.It is currently '+body.currently.temperature+' degrees out.There is '+body.currently.humidity*100+'% chance of rain')
        }

    })
}
module.exports=forecast

