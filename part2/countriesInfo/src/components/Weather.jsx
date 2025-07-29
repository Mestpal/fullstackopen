const Weather = ({location, forecast}) => {
  if (location && forecast?.weather) {
    const iconWeather = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
    
    return <>
      <h1> Temperature in {location} </h1>
      Temperature {forecast?.main?.temp} Celsius <br/>
      <img src={iconWeather} alt="weather icon" /><br/>
      Wind {forecast?.wind?.speed} m/s
    </>
  }
}

export default Weather