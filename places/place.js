const axios = require('axios');

const getPlaceLatLng = async (dir) => {
    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "b50498667cmshfad27348430020fp18d9e2jsn731c62e99309"
        }
    });

    const resp =  await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No found results for ${dir}`)
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lgn = data.lon;

    return {
        direction,
        lat,
        lgn
    }
}

module.exports = {
    getPlaceLatLng
}