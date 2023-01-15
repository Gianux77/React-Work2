import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Beverages from './components/Beverages'

function App() {
/*

1. Instalar axios
2. Importar axios
3. Estado donde se almacena la respuesta
4. useEffect con arreglo de dependencias
5. Ejecutar axios
6. Guardar la respuesta en el estado

*/
const [ dataBeverages, setDataBeverages ] = useState([])
const [ name, setName ] = useState("margarita")


  const getData = ()=>{
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then( resp => { 
      console.log(resp.data.drinks) 
      setDataBeverages(resp.data.drinks)})
      .catch( error => console.error(error))
  }
  const searchBeverages = (e)=>{
    e.preventDefault()
    setName(e.target[0].value.toLowerCase())
  }
  useEffect(()=>{
    getData ();
  },[name])

  return (
    <div className="App">
      <form onSubmit={(e)=>searchBeverages(e)}>
        <div className='beverages-input_button'>
        <input type="text" placeholder="Buscar por nombre" />
        <button type="submit"><small>Buscar</small></button>
        </div>                                                        {/* onSubmit={(e)=> searchCharacter(e)} */}                                                            
        
      </form><br />
      <hr />
      <div className='beverages_app'>
      {dataBeverages !== null ? (
        dataBeverages.map((beverages, index) => (
          <Beverages 
          key={`beverages-${index}`} 
          data={beverages} />
        ))
      ) : (
        <div className='beverages-h1'>
          <h1>No hubo ningun resultado</h1>
          </div>
        )}
      </div>
    
    </div>
  )
}

export default App
