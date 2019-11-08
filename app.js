const place = require('./places/place');
const weather = require('./weathers/weather');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Direction of city to get weather',
        demand: true
    }
}).argv;

const dir = argv.direction;

const getInfo = async (dir) => {

    try {

        let p = await place.getPlaceLatLng(dir)
        let w = await weather.getWeather(p.lat, p.lgn)

        return `El Clima de ${p.direction} es de ${w.temp}  C`;

    } catch (e) {
        return `No found data info of ${dir}`
    }
}

getInfo(dir)
.then(console.log)
.catch(console.log)