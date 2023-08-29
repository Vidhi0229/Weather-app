const key = 'spGEfKmbxWJpSqe8ShOfHHqoNmziP1jb';

const getWeather = async(id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)
    const data = await response.json()

    //console.log(data[0])

    return data[0]
}

const getCity = async(city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query) 
    const data = await response.json()

    //console.log(data[0])
    return data[0]
}

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