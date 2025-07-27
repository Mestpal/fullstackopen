const ShowCountries = ({filter, list, country}) => {
  if(filter) {
    if (list?.length === 1 && country?.name) {        
      return <div>
        <h1>{country.name.common}</h1><br/>
        Capital: {country?.capital?.map(capital => capital).join(' ')}<br/>
        Area: {country.area}<br/>
        <h1>Languages</h1>
        <ul>
          {Object.keys(country.languages).map(lang => <li key={lang}>{country.languages[lang]}</li>)}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt}/>
      </div>
    }
    else if (list?.length < 10) {
      return list.map(country => <>{country}<br/></>)
    } else {
      return "Too many matches, specify another filter"
    }
  }
}

export default ShowCountries