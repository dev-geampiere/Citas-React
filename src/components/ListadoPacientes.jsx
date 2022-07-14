import Pacientes from "./Pacientes";

const ListadoPacientes = () => {
    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-center text-xl">
                Listado Pacientes
            </h2>
            <p className="text-l text-center mt-3 mb-1">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">
                    Pacientes y Citas
                </span>
            </p>
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
        </div>
     );
}
 
export default ListadoPacientes;