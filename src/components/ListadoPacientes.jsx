import Pacientes from "./Pacientes";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            { pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-center text-xl">
                        Listado Pacientes
                    </h2>
                    <p className="text-l text-center mt-3 mb-1">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>
                    {pacientes.map( paciente =>(
                        <Pacientes 
                            key = {paciente.id} 
                            paciente = {paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-center text-xl">
                        No hay pacientes
                    </h2>
                    <p className="text-l text-center mt-3 mb-1">
                        Comienza agregando pacientes y {''}
                        <span className="text-indigo-600 font-bold">
                            apareceran en este lugar
                        </span>
                    </p>
                </>
            )}
        </div>
     );
}
 
export default ListadoPacientes;