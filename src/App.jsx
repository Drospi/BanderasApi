import { Continenta } from "./components/Continenta";
import "./App.css";
import { useEffect, useState } from "react";

import  Buscador  from "./components/Buscador";

// import axios from 'axios'
function App() {
  const [datos, setDatos] = useState([]);
  const [paisesFiltro, setPaisesFiltro]=useState([])
  const [title, setTitle] = useState('');
  const [active,setActive] =useState(true)

  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setDatos(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // axios.get("https://restcountries.com/v3.1/all")
  //   .then((res) => setDatos(res.data))

    useEffect(()=>{
      const paisesFiltro = datos.filter(pais=>pais.continents.includes(title))
      setPaisesFiltro(paisesFiltro)
    },[datos,title])
    console.log(datos.filter(pais=>pais.continents.includes(title)));
    console.log(datos)
    
  return (
    <>
    <nav className="nav">
    <Buscador className='bus' fuA={setActive}/>
      {active?(<Continenta className='cont' data={datos} fu={setTitle}></Continenta>):''}
      </nav>
      <div className="paises">
      {active?((title==''?datos:paisesFiltro).map((el, key) => {
        return (
          <div className="country-card" key={key}>
            <img src={el.flags.png} alt="" />
            <h3>
              {el.name.common}
            </h3>
            <p>Population: {el.population}</p>
            <p>Region: {el.continents}</p>
            <p>Capital: {el.capital}</p>
          </div>
        );
      })):''}
      </div>

    </>
  );
}

export default App;
