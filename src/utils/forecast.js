const request = require('request')

const forecast = (langitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/0d826eb022d0939f33ba454840503c58/${longitude},${langitude}`

    request({url, json:true}, (err, {body}) => { // old res (response)
        if(err){
            callback('Unable connect to forecast service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + `It is currently ${body.currently.temperature} dergest out. This high today is ${ body.daily.data[0].temperatureHigh } with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability} change of rain.`)
        }
    })
}

module.exports = forecast