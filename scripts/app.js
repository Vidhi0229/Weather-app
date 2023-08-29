cityForm = document.querySelector("form");
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const icon = document.querySelector('.icon img')
const time = document.querySelector('.time')


let timeSrc = null

const updateUI = (data) => {
    const {cityDets, weather} = data


    details.innerHTML = `
    <h5 class="my-5">${cityDets.EnglishName}</h5>
    <div class="my-5">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    const i = `src/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', i)

    if(weather.IsDayTime){
        timeSrc = 'src/Day.png'
    }
    else{
        timeSrc = 'src/night.png'
    }
    
    time.setAttribute('src', timeSrc)

    if(card.classList.contains("d-none")){
        card.classList.remove("d-none")
    }
};


const updateCity = async(city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key)

    return {
        cityDets, weather
    };
}

cityForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const city = cityForm.city.value.trim()
    cityForm.reset();

    updateCity(city)
        .then(data => {
            updateUI(data)
            console.log(data)
        })
        .catch(err => console.log(err))
})

