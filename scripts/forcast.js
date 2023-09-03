class Forecast{
    constructor(){
        this.key = 'spGEfKmbxWJpSqe8ShOfHHqoNmziP1jb';
        this.WeatherBase = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.CityBase = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {cityDets, weather};
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.CityBase + query)
        const data = await response.json()
        return data[0]
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`
        const response = await fetch(this.WeatherBase + query)
        const data = await response.json()
        return data[0]
    }
}

// const key = 'spGEfKmbxWJpSqe8ShOfHHqoNmziP1jb';

// const getWeather = async(id) => {
//     const base = https://dataservice.accuweather.com/currentconditions/v1/'
//     const query = `${id}?apikey=${key}`

//     const response = await fetch(base + query)
//     const data = await response.json()

//     //console.log(data[0])

//     return data[0]
// }

// const getCity = async(city) => {
//     const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
//     const query = `?apikey=${key}&q=${city}`

//     const response = await fetch(base + query) 
//     const data = await response.json()

//     //console.log(data[0])
//     return data[0]
// }

// getCity("California")
//     .then(data => {
//         return getWeather(data.Key)
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

//getWeather(206683)