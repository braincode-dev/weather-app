const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWxleGtpenltYTkxIiwiYSI6ImNrNXllb2h0NjA0OGQzbG1sMW8zcTZwZHEifQ.NVGJGyLGrgOujYaq1ySNhA`

    request({url, json:true}, (err, {body}) => { // old code it is res (response)
        if(err){
            callback('Unable to conect services!', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location, try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode