const Error = ({children}) => {
    return ( 
        <div className="bg-red-800 p-3 mb-3 rounded-md text-center uppercase font-bold text-white">
            <p>{children}</p>
        </div>
     );
}
 
export default Error