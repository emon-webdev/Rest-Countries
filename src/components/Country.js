import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    const { name, area, flags, continents, region } = country;
    return (
        <div className='country-item' key={country.index} >
            <h2>Name: {name.common}</h2>
            <h3>Area: {area} {continents[0]}</h3>
            <p>Region: {region}</p>
            <img src={flags.png} alt="" srcset="" />
        </div>

    )
};

export default Country;