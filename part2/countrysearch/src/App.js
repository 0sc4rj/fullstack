import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import FormCountry from "./components/formCountry";

const App = () => {
  const [countrie, setCountrie] = useState([])
  const [filterText, setFilterText] = useState("")

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {setCountrie(response.data)})
      .catch(error => console.error("Error fetching countries:", error))
  }, [])

  const filteredCountries = countrie.filter(country =>
    country.name.official.toLowerCase().includes(filterText.toLowerCase())
  );

  const renderCountries = () => {
    if (filteredCountries.length === 0) {
      return <p>No countries found matching your search</p>
    } else if (filteredCountries.length === 1) {
      return filteredCountries.map(viewCountrie => (
      <div key={viewCountrie.name.common}>
        <h1>{viewCountrie.name.common}</h1>
        <p>{console.log(viewCountrie)}</p>
        <p>capital {viewCountrie.capital}</p>
        <p>population {viewCountrie.population}</p>
        <br/>
        <h3>languages</h3>
        {viewCountrie.languages && (
          <ul>
            {Object.keys(viewCountrie.languages).map(languageKey => <li key={viewCountrie.languages[languageKey]}>{viewCountrie.languages[languageKey]}</li>)}
          </ul>
        )}
        <br/>
        {viewCountrie.flags && (<img src={viewCountrie.flags.png} alt={viewCountrie.flags.alt} width={100} />)}
      </div>
      ))
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10 ) {
      return filteredCountries.map(viewCountrie => <p key={viewCountrie.name.common}>{viewCountrie.name.common}</p>)
    } else {
      return <p>Too many matches, specify another filter</p>
    }
  }

  return (
    <>
      <FormCountry onFilterChange={setFilterText} />
      <br/>
      {filterText !== "" ? (renderCountries()) : ("Search your favorite country")}
    </>
  );
}

export default App;
