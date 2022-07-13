const Formulario = () => {
    return ( 
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-center text-2xl">
                Seguimientos Pacientes
            </h2>
            <p className="text-lg text-center mt-3 mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="mascota" className="block uppercase text-gray-700 font-black">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block uppercase text-gray-700 font-black">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block uppercase text-gray-700 font-black">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block uppercase text-gray-700 font-black">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block uppercase text-gray-700 font-black">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
                        placeholder="Describe los Sintomas"
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