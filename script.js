const apikey = "4982c6929d88fe9368465c8967de1c9b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".form input");
const searchbut = document.querySelector(".form button"); 
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main === "Clouds"){
        weathericon.src = "clouds.png"
    }
    else if(data.weather[0].main === "Rain"){
        weathericon.src = "rain.png"
    }
    else if(data.weather[0].main === "Clear"){
        weathericon.src = "clear.png"
    }
    else if(data.weather[0].main === "Snow"){
        weathericon.src = "snow.png"
    }
    else if(data.weather[0].main === "Drizzle"){
        weathericon.src = "drizzle.png"
    }  
    else if(data.weather[0].main === "Mist"){
        weathericon.src = "mist.png"
    }

}
searchbut.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
