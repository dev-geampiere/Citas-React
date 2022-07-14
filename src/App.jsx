import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className='container mx-auto mt-12'>
        <Header />
        <div className='mt-2 md:flex'>
          <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
          />
          <ListadoPacientes />
        </div>
    </div>
  )
}

export default App
