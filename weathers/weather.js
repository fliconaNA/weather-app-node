const axios = require ('axios');

const getWeather = async ( lat, lon ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=15eefb32cbf0157dbcc12597830791af&units=metric`)

    return {temp:resp.data.main.temp};
}

module.exports = {
    getWeather
}