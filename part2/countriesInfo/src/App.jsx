import { useState, useEffect } from 'react'
import countriesServices from './services/countries'
import weatherServices from "./services/weather";
import ShowCountries from './components/ShowCountries'
import Weather from './components/Weather';

const App = () => {
  const [filter, setFilter] = useState('')
  const [countriesList, setCountriesList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [country, setCountry] = useState({})
  const [weather, setWeather] = useState({})

  const getAllCountries = () => {
    countriesServices.getAllCountries()
      .then(list => setCountriesList(list))
  }

  const getCountry = () => {
    setCountry({})

    if (filteredList.length === 1) {
      countriesServices
      .getCountry(filteredList[0])
      .then((response) => {
        setCountry(response)

        weatherServices
          .getWeather(response.capitalInfo)
          .then((weather) => {
            setWeather(weather);
          }) 
      })
    }
  }

  const onChangeFilter = (event) => setFilter(event.target.value)

  const getFilteredCountries = () => setFilteredList(
    countriesList
    .filter((country) => 
      country.toLowerCase().includes(filter.toLocaleLowerCase())
  ))

  useEffect(getAllCountries, [])
  useEffect(getFilteredCountries, [countriesList, filter])
  useEffect(getCountry, [filteredList])
  
  return <div>
    <div>Find Countries <input value={filter} onChange={onChangeFilter}/> </div>
    <ShowCountries filter={filter} list={filteredList} country={country} action={setFilter}/>
    <Weather location={country?.capital?.[0]} forecast={weather}/>
  </div>
}

export default App