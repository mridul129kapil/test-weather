// const weatherForm = document.querySelector('form')
// const message1 = document.querySelector('#one')
// const search = document.querySelector('input')

// weatherForm.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     message1.textContent = 'Loading...'

//     const location = search.value
//     console.log(location)
//     if(location.length===0)
//     {
//        message1.textContent = 'Please enter the location!'
//     }
//     else{
//         const url = 'http://localhost:3000/?address='+location
//         fetch(url).then((response)=>{
//             response.json.then((data)=>{
//                 console.log(data)
//             })
//         })
        
//     }
// })


var weatherForm = document.querySelector('form')
var search = document.querySelector('input')
var jumbo = document.querySelector('#jumb')
var weatherImg = document.querySelector('#weatherImg')
var city = document.querySelector('#city')
var country = document.querySelector('#country')
var time = document.querySelector('#time')
var temp = document.querySelector('#temp')
var cond = document.querySelector('#cond')
//const messageOne = document.querySelector('#one')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
   // messageOne.textContent = 'Loading...'

    if(location.length===0)
    {
        console.log('Please enter a location!')
        jumbo.style.display = "block"
        city.textContent = "Please enter a location to search!"
        weatherImg.src = "/js/img/unnamed.png"
        
    }
    else{

        const url = 'http://localhost:3000/weather?address='+location

        fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            jumbo.style.display = "block"
            console.log(data.error)
           city.textContent = data.error.message+" Please try again with some other location."

           weatherImg.src = "/js/img/error.png"
           country.textContent = ""
           time.textContent = ""
           temp.textContent = ""
           cond.textContent = ""

        }
        else{
            
            console.log(data)
            jumbo.style.display = "block"
            weatherImg.src = "http:"+data.icon
            city.textContent = "City:  "+data.name
            country.textContent = "Country:  "+data.country
            time.textContent = "Local Time:  "+data.local_time
            temp.textContent = "Temparature:  "+data.temp_c+"℃"
            cond.textContent = "Condition:  "+data.condition

         //   messageOne.textContent = data.name+', '+data.country+'.'
          //  messageTwo.textContent = 'It is currently '+data.temp+' degrees Celsius. The weather is '+data.condition+' and there is '+data.precipitation+' chances of rain.'
        }
    })
})
        
    }
})