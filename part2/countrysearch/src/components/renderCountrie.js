import React from "react";

const RenderCountrie = ({ countrie }) => {
  return (
    <div key={countrie.name.common}>
      <h1>{countrie.name.common}</h1>
      <p>capital {countrie.capital}</p>
      <p>population {countrie.population}</p>
      <br />
      <h3>languages</h3>
      {countrie.languages && (
        <ul>
          {Object.keys(countrie.languages).map((languageKey) => (
            <li key={countrie.languages[languageKey]}>
              {countrie.languages[languageKey]}
            </li>
          ))}
        </ul>
      )}
      <br />
      {countrie.flags && (
        <img src={countrie.flags.png} alt={countrie.flags.alt} width={100} />
      )}
    </div>
  );
};

export default RenderCountrie;
