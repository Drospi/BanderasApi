import { useState } from 'react';
import './Buscador.css';
const Buscador = (el) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchTerm==''?el.fuA(true):el.fuA(false)
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
      <nav >
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">
            Buscar
          </button>
        </form>
      </nav>
      {/* Renderizar los resultados en una cuadrícula */}
      <div className="results">
        {results.map((el,key) => (
          <div className="country-card" key={key}>
          <img src={el.flags.png} alt="" />
          <h3>
            {el.name.common}
          </h3>
          <p>Population: {el.population}</p>
          <p>Region: {el.continents}</p>
          <p>Capital: {el.capital}</p>
        </div>
        ))}
      </div>
    </div>
  );
};
export default Buscador;