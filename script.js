
function search()
{
    country=searchBar.value;
    key='e97ffff0b9cdbc7b07a95878ab254a96'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${key}`)
    .then((data)=>data.json())
    .then((res)=>display(res))
    .catch((err)=>alert('failed to fetch'))
}   


function display(weatherDetails)
{

    countryName=weatherDetails.name
    console.log(countryName)
    Temp=weatherDetails.main.temp
    console.log(Temp)
    description=weatherDetails.weather[0].description
    console.log(description)
    Humidity=weatherDetails.main.humidity
    console.log(Humidity);
    Windspeed=weatherDetails.wind.speed
    console.log(Windspeed)
    icon=weatherDetails.weather[0].icon
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${countryName}')`


    htmlData=`
    <h2 class="card-title">Weather in ${countryName}</h2>
    <h2 class="card-title">${Temp}°C</h2>
    <div class="description"><img src="https://openweathermap.org/img/wn/${icon}@2x.png">${description}</div>
    <div class="humidity">Humidity : ${Humidity}%</div>
    <div class="wind">Wind speed: ${Windspeed} km/h</div>
    `
    result.innerHTML=htmlData
}