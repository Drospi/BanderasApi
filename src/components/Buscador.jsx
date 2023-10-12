import React, { useState } from 'react';
import './Buscador.css';


const Buscador = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm)
    }

  return (
    <div className='container'>
    <nav bg="light" expand="lg">
        <form>
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}/>
          <button variant="outline-success">Buscar</button>
        </form>
    </nav>
    </div>
  );
};

export default Buscador;
