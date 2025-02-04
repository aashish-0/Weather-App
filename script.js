const apikey = "77352dabd3a8d0efaa23bdc28d776865";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + city + `&appid=${apikey}`);
        const data = await response.json();

        if (response.ok) {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "./images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "./images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "./images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "./images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "./images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
        } else {
            console.error("Error: ", data.message);
            alert("City not found!");
        }
    } catch (error) {
        console.error("Fetch error: ", error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});