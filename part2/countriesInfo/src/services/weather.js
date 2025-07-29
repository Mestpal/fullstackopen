import axios from "axios"

const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

function getWeather(capitalInfo) {
  return axios
    .get(`${baseUrl}?lat=${capitalInfo.latlng[0]}&lon=${capitalInfo.latlng[1]}&appid=${apiKey}&units=metric`)
    .then((response) => response.data)
}

export default {getWeather}