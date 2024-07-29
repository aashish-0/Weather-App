const apikey = "77352dabd3a8d0efaa23bdc28d776865";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + city + `&appid=${apikey}`);
        const data = await response.json();

        if (response.ok) {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
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