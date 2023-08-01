let input = document.querySelector('.search-field input')
let searchBtn = document.querySelector('.search-field button')
let weather = document.querySelector('.weather')
let apiKey = 'fcba15a3bc2fcd310ef8529efd847249';

function getWeather() {
    let city = input.value

    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    // console.log(city)
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            // console.log(data)
            weatherData(data[0].lat, data[0].lon)
            // console.log(data[0].lon)
        }
        )
        .catch((err) => {
            alert('Problem in fetching, Check Spelling', err)
        })
    function weatherData(lat, lon) {
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

        fetch(url)
            .then(res => res.json())
            .then(allData => {
                console.log(allData)
                let dailyForecast = []

                let oneDayForecast = allData.list.filter(day => {
                    let dailydate = new Date(day.dt_txt).getDate()
                    if (!dailyForecast.includes(dailydate)) {
                        return dailyForecast.push(dailydate)
                    }
                })
                console.log(oneDayForecast)

                weather.innerHTML = ''


                showData(allData, oneDayForecast)
            })


    }
}

function getSimpleDate(dt_txt) {
    let fullDate = new Date(dt_txt)
    let month = fullDate.toLocaleString('default', { month: 'short' })
    let date = fullDate.getDate()
    return `${month} ${date}`

}
function showData(given, forecast) {
    let html = ` 
    <div class="weather-main">
        <div class="main-content">
        <div>Today</div>
            <div class="name">${given.city.name}</div>
            <span class="desc">${given.list[0].weather[0].main}</span><span>${given.list[0].clouds.all}%</span>
            <div class="temp">
                <div>${(given.list[0].main.temp - 273.15).toFixed(0)}&#8451;</div>
                <span class="max">max:${(given.list[0].main.temp_max - 273.15).toFixed(0)}&#8451;,</span>
                <span class="min">min:${(given.list[0].main.temp_max - 273.15).toFixed(0)}&#8451;</span>
            </div>
            <div class="humidity">Humidity: ${given.list[0].main.humidity}%</div>
            <div class="feel">Feels-like: ${(given.list[0].main.feels_like - 273.15).toFixed(0)}&#8451;</div>
        </div>
    </div>
    <div class="weather-next">
        <div class="next-content">
        </div>
        1<div class="content">
        <div class="name">${given.city.name}</div><span>${(getSimpleDate(forecast[1].dt_txt))}</span>
        <span class="desc">${forecast[1].weather[0].main} </span>
        <span>${forecast[1].clouds.all}%</span>
            </span>
            <div class="temp">
                <div>${(forecast[1].main.temp - 273.15).toFixed(0)}&#8451;</div>
                <span class="max">max ${(forecast[1].main.temp_max - 273.15).toFixed(0)}&#8451;,</span><br>
                <span class="min">min ${(forecast[1].main.temp_max - 273.15).toFixed(0)}&#8451;</span>
            </div>
            <div class="humidity">Humidity: ${forecast[1].main.humidity}%</div>
            <div class="feel">Feels-like : ${(forecast[1].main.feels_like - 273.15).toFixed(0)}&#8451;</div>
        </div>
        2<div class="content">
            <div class="name">${given.city.name}</div><span>${(getSimpleDate(forecast[2].dt_txt))}</span>
 <span class="desc">${forecast[2].weather[0].main} </span>
 <span>${forecast[2].clouds.all}%</span>
            </span>
            <div class="temp">
                <div>${(forecast[2].main.temp - 273.15).toFixed(0)}&#8451;</div>
                <span class="max">max ${(forecast[2].main.temp_max - 273.15).toFixed(0)}&#8451;,</span><br>
                <span class="min">min ${(forecast[2].main.temp_max - 273.15).toFixed(0)}&#8451;</span>
            </div>
            <div class="humidity">Humidity: ${forecast[2].main.humidity}%</div>
            <div class="feel">Feels-like : ${(forecast[2].main.feels_like - 273.15).toFixed(0)}&#8451;</div>
        </div>
        3<div class="content">
        <div class="name">${given.city.name}</div><span>${(getSimpleDate(forecast[3].dt_txt))}</span>
<span class="desc">${forecast[3].weather[0].main} </span>
<span>${forecast[3].clouds.all}%</span>
        </span>
        <div class="temp">
            <div>${(forecast[3].main.temp - 273.15).toFixed(0)}&#8451;</div>
            <span class="max">max ${(forecast[3].main.temp_max - 273.15).toFixed(0)}&#8451;,</span><br>
            <span class="min">min ${(forecast[3].main.temp_max - 273.15).toFixed(0)}&#8451;</span>
        </div>
        <div class="humidity">Humidity: ${forecast[3].main.humidity}%</div>
        <div class="feel">Feels-like : ${(forecast[3].main.feels_like - 273.15).toFixed(0)}&#8451;</div>
    </div>
   4 <div class="content">
    <div class="name">${given.city.name}</div><span>${(getSimpleDate(forecast[4].dt_txt))}</span>
<span class="desc">${forecast[4].weather[0].main} </span>
<span>${forecast[4].clouds.all}%</span>
    </span>
    <div class="temp">
        <div>${(forecast[4].main.temp - 273.15).toFixed(0)}&#8451;</div>
        <span class="max">max ${(forecast[4].main.temp_max - 273.15).toFixed(0)}&#8451;,</span><br>
        <span class="min">min ${(forecast[4].main.temp_max - 273.15).toFixed(0)}&#8451;</span>
    </div>
    <div class="humidity">Humidity: ${forecast[4].main.humidity}%</div>
    <div class="feel">Feels-like : ${(forecast[4].main.feels_like - 273.15).toFixed(0)}&#8451;</div>
</div>
5<div class="content">
<div class="name">${given.city.name}</div><span>${(getSimpleDate(forecast[5].dt_txt))}</span>
<span class="desc">${forecast[5].weather[0].main} </span>
<span>${forecast[5].clouds.all}%</span>
    </span>
    <div class="temp">
        <div>${(forecast[5].main.temp - 273.15).toFixed(0)}&#8451;</div>
        <span class="max">max ${(forecast[5].main.temp_max - 273.15).toFixed(0)}&#8451;,</span><br>
        <span class="min">min ${(forecast[5].main.temp_max - 273.15).toFixed(0)}&#8451;</span>
    </div>
    <div class="humidity">Humidity: ${forecast[5].main.humidity}%</div>
    <div class="feel">Feels-like : ${(forecast[5].main.feels_like - 273.15).toFixed(0)}&#8451;</div>
</div>
    </div>
`
    weather.insertAdjacentHTML('beforeend', html)
}
searchBtn.addEventListener('click', getWeather)
document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') getWeather()
})