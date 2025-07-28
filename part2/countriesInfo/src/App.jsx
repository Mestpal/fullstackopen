import { useState, useEffect } from 'react'
import countriesServices from './services/countries'
import ShowCountries from './components/ShowCountries'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countriesList, setCountriesList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [country, setCountry] = useState({})

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
  </div>
}

export default App