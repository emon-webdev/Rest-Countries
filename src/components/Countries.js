import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        return loadCountries()
    }, [])

    const loadCountries = async () => {
        const url = 'https://restcountries.com/v3.1/all';
        try {
            const res = await fetch(url);
            const data = await res.json();
            setCountries(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='countries container'>
            {
                countries.map(country =>
                    <Country
                        key={country.capital} country={country}
                    />
                )
            }
        </div>
    );
};

export default Countries;