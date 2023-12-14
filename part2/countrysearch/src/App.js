import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import FormCountry from "./components/formCountry";
import RenderCountrie from "./components/renderCountrie";

const App = () => {
  const [countrie, setCountrie] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [selectedCountrie, setSelectedCountrie] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountrie(response.data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const filteredCountries = countrie.filter((country) =>
    country.name.official.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleShowCountrie = (countrie) => {
    setSelectedCountrie(countrie);
  };

  const renderCountries = () => {
    if (filteredCountries.length === 0) {
      return <p>No countries found matching your search</p>;
    } else if (filteredCountries.length === 1) {
      return filteredCountries.map((viewCountrie) => (
        <RenderCountrie
          key={viewCountrie.name.common}
          countrie={viewCountrie}
        />
      ));
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
      return filteredCountries.map((viewCountrie) => (
        <div key={viewCountrie.name.common}>
          <span>{viewCountrie.name.common}</span>;
          <button onClick={() => handleShowCountrie(viewCountrie)}>Show</button>
        </div>
      ));
    } else {
      return <p>Too many matches, specify another filter</p>;
    }
  };

  return (
    <>
      <FormCountry onFilterChange={setFilterText} />
      <br />
      {filterText !== "" ? (
        selectedCountrie ? (
          <RenderCountrie countrie={selectedCountrie} />
        ) : (
          renderCountries()
        )
      ) : (
        "Search your favorite country"
      )}
    </>
  );
};

export default App;
