import { useState, useEffect } from 'react'
import './App.css'
import axios from 'react'
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
const [ dataBeverages, setDataBeverages ] = useState( [] )
const [ name, setName ] = useState("margarita")

  const getData = ()=>{
  axios
  .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
  .then( resp =>  console.log(resp.drinks ))
  .catch( error => console.error(error))
  }

  useEffect(()=>{
    getData ();
  },[])

  return (
    <div className="App">
      <form>                                                        {/* onSubmit={(e)=> searchCharacter(e)} */}                                                            
        <input type="text" placeholder="Buscar por nombre" />
        <button type="submit">Buscar</button>
      </form><br />
      <hr />
      <div className='beverages_app'>
      <Beverages/>
      </div>
    
    </div>
  )
}

export default App
