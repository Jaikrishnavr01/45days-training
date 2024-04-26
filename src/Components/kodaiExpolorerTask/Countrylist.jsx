import React, { useState } from 'react';

const CountryList = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { id: 1, name: 'Country A', capital: 'Capital A' },
    { id: 2, name: 'Country B', capital: 'Capital B' },
  ];

  const handleCountryClick = (id) => {
    const selected = countries.find(country => country.id === id);
    setSelectedCountry(selected);
  };

  return (
    <div className="country-capital">
      <h1 className="heading">Countries and Capitals</h1>
      <ul className="country-list">
        {countries.map(country => (
          <li key={country.id} id={`country-${country.id}`} onClick={() => handleCountryClick(country.id)}>
            {country.name}
          </li>
        ))}
      </ul>
      <div className="selected-country">
        {selectedCountry && (
          <>
            <h2 className="selected-country-name">{selectedCountry.name}</h2>
            <p className="selected-country-capital">{selectedCountry.capital}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryList;
