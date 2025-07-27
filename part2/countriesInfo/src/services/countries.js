import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'

function getAllCountries(){
  return axios
    .get(`${baseUrl}/api/all`)
    .then(response => {      
      return response.data.map( country => country.name.common	)
    })
}

function getCountry(countryName) {
  if (countryName) {    
    return axios
      .get(`${baseUrl}/api/name/${countryName}`)
      .then(response => response.data)
  }
}

export default {getAllCountries, getCountry }