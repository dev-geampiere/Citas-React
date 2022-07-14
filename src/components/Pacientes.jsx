const Paciente = () => {
    return ( 
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-8 rounded-xl">
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsam quis fugit debitis rem voluptas nemo, iure minima quibusdam itaque unde explicabo placeat nesciunt tempore tenetur id repellendus dignissimos esse.
                    </span>
                </p>
            </div>
     );
}
 
export default Paciente;