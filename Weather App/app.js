const searchBox = document.querySelector(".search input");

const btn = document.querySelector(".search button");
const currWeather = document.querySelector(".weather img")




const apiKey = "a678fc6d071877d160aeb30c00889bec"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=2adc17dbed19a28187a9c2199ba24f69&units=metric&q=";

async function checkWeather(city="New York"){
    const res = await fetch(apiUrl + city);

    if(res.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }
    else{
        let data = await res.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed +" Km/Hr";
       
    
        let weather = data.weather[0].main;
        console.log(weather)
        currWeather.src= "images/" + weather + ".png" 
    
        document.querySelector(".weather").style.display = "block"
         document.querySelector(".error").style.display = "none"
    }

   
   
}


btn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})