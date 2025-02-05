const apikey = "4982c6929d88fe9368465c8967de1c9b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".form input");
const searchbut = document.querySelector(".form button"); 
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
  try{
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response.status} (${response.statusText}`);
        }
        
        var data = await response.json();
        if (!data || !data.main || !data.weather) {
            throw new Error("Invalid API response structure");
        }
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
    
    catch(error){
        console.error("Error fetching weather data:", error.message);
        alert(`Failed to fetch weather data: ${error.message}`);
        return null
    }
   

}
searchbut.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
