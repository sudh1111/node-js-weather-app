const request=require('request')
const geocode=(place,callback)=>{

const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1Ijoid29ya2hhcmQiLCJhIjoiY2p6ejR2dThuMTc2aTNkcGtkenE0MHF4NyJ9.e8A8dRLyarE9zTanDgRO8g'
request({url: url,json: true},(error,{body})=>{
if(error)
{
    callback('not connected',undefined);

}
else if(body.features.length==0)
{
    callback("error in line",undefined);
}
else
{
    callback(undefined,{
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name

    })
}
})
}
module.exports=geocode
