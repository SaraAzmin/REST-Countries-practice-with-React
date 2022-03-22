import React from 'react';
import './Country.css';

const Country = (props) => {

    //destructuring here
    const { name, area, population, flags } = props.country;

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2 className='mt-5'>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;