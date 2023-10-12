import React, { useState, useEffect } from "react";
import "./Continenta.css";

function Continenta() {
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((datos) => {
        setData(datos);
        //console.log(datos);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Continentes</h1>
      </div>
      <div className="divCards">
        <div className="Card">
          {data.map((country) => (
            <div key={country.name.common}>
              <img src={country.flags.svg} className="imgCountry" />
              <h2>Pais: {country.name.common}</h2>
              <h3>Capital: {country.name.capital}</h3>
              <h3>Región: {country.name.region}</h3>
              <h3>Población: {country.name.population}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Continenta;
