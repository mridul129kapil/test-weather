const request = require('request')


const geocode = (value,callback)=>{

    const url = 'http://api.weatherapi.com/v1/current.json?key=d28eda14872f4714bfa70019200311&q='+value

    request.get({url,json: true},(error,response)=>{
        const body = response.body

        if(error)
        {
             callback('Cant connect to the service!', undefined)
        }
        else{
                    if(body.error)
                    {
                        callback(body.error,undefined)
                    }
                    else{
                        weather = {
                            name: body.location.name,
                            country: body.location.country,
                            local_time: body.location.localtime,
                            temp_c: body.current.temp_c,
                            condition: body.current.condition.text,
                            icon: body.current.condition.icon,
                            precipitation: body.precip_in
                        }
                        callback(undefined,weather)
                    }
        }

    })

}

module.exports = geocode
