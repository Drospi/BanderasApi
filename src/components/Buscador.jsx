import React, { useState } from 'react';
import './Buscador.css';

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setResults(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  return (
    <div className='container'>
      <nav bg="light" expand="lg">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" variant="outline-success">
            Buscar
          </button>
        </form>
      </nav>
      {/* Renderizar los resultados */}
      <div className="results">
        {results.map(country => (
          <div key={country.name.common}>
            <h2>{country.name.common}</h2>
            {/* Aqui es Para mostrar más detalles sobre los Paises */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buscador;
