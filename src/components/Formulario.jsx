import { useState } from "react";

const Formulario = () => {
    
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([ nombre, propietario, email, fecha, sintomas ].includes('')) {
            console.log('falta un campo')

            setError(true)
            return;
        } 
        setError(false)
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-center text-xl">
                Seguimientos Pacientes
            </h2>
            <p className="text-l text-center mt-3 mb-1">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                { error && 
                    <div className="bg-red-800 p-3 mb-3 rounded-md">
                        <p className="text-center uppercase font-bold text-white">Todos los campos son obligatorios</p>
                    </div>
                }
                <div className="mb-4">
                    <label htmlFor="mascota" className="block uppercase text-gray-700 font-black">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="propietario" className="block uppercase text-gray-700 font-black">
                        Nombre Propietario 
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block uppercase text-gray-700 font-black">
                        Email 
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="alta" className="block uppercase text-gray-700 font-black">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sintomas" className="block uppercase text-gray-700 font-black">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                        placeholder="Describe los Sintomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>
                <input 
                    type="submit" 
                    className="uppercase bg-indigo-600 p-3 w-full font-bold text-white
                    hover:bg-indigo-700 cursor-pointer transition-all"
                    value="agregar paciente"
                />
            </form>
        </div>
     );
}
 
export default Formulario;