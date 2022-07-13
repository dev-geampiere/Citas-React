const ListadoPacientes = () => {
    return ( 
        <div className="md:w-1/2">
            <h2 className="font-black text-center text-2xl">
                Listado Pacientes
            </h2>
            <p className="text-lg text-center mt-3 mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">
                    Pacientes y Citas
                </span>
            </p>
            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">
                        Hook
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propietario: {''}
                    <span className="font-normal normal-case">
                        Geampiere
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">
                        jeanpiere.virgilio@gmail.com
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha Alta: {''}
                    <span className="font-normal normal-case">
                        Agosto 1 del 2022
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {''}
                    <span className="font-normal normal-case">
                        Covid
                    </span>
                </p>
            </div>
        </div>
     );
}
 
export default ListadoPacientes;