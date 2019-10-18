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
            callback(undefined,'It is '+body.daily.data[0].summary+'.It is currently '+body.currently.temperature*.27+' degrees out.The highest temperature is '+body.daily.data[0].temperatureHigh*.27+' for the day and the lowest temperature is'+body.daily.data[0].temperatureLow*.27+' for the day.There is '+body.currently.humidity*100+'% chance of rain')
        }

    })
}
module.exports=forecast

