import { useState,useEffect } from "react"
import Error from "./Error";


const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {

  const[nombre,setNombre]= useState("");
  const[propietario,setPropietario]= useState("");
  const[email,setEmail]= useState("");
  const[fecha,setFecha]= useState("");
  const[sintomas,setSintomas]= useState("");

  const[error,setError]= useState(false)

  useEffect(()  => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])
  
 
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }



  const handleSubmit = (e) => {
    e.preventDefault();

      //valdiacion de formulario
      if ([nombre,propietario,email,fecha,sintomas].includes("")) {
        setError(true)
        return;
      }

      setError(false)

      //objeto de pacientes
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        //id:generarId()
      }

      if (paciente.id) {
        //en verdad
        objetoPaciente.id = paciente.id

        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
        paciente.id ? objetoPaciente : pacienteState)
          setPacientes(pacientesActualizados)
          setPaciente({})
      } else {
        objetoPaciente.id = generarId();
        setPacientes([...pacientes,objetoPaciente])
      }
    
      //console.log(objetoPaciente)

      
      //Reinicio de formulario

      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      setSintomas("")
  }

  return (
    <div className=" md:w-1/2 lg:w-2/5">
        
      <h2 className=" font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className=" text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className=" font-bold text-blue-700">
          Administralos
          </span>
      </p>

      <form 
      
      onSubmit={handleSubmit}
      className=" bg-white shadow-md mt-6 rounded-lg  mb-10 p-3"
      
      >
        { error &&  <Error mensaje = "Todos los campos son Obligatorios"/>
        
        }


        <div className=" mb-5">
          <label htmlFor="mascota" className="block text-black font-bold uppercase">
            Nombre de Mascota
          </label>
            <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="propietario" className="block text-black font-bold uppercase">
            Propietario
          </label>
            <input 
            id="propietario"
            type="text" 
            placeholder="Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="email" className="block text-black font-bold uppercase">
            Email
          </label>
            <input 
            id="email"
            type="email" 
            placeholder="Email Contacto Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="alta" className="block text-black font-bold uppercase">
            Alta
          </label>
            <input 
            id="alta"
            type="date" 
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="sintomas" className="block text-black font-bold uppercase">
            Sintomas
          </label>
            <textarea 
            id="sintomas" 
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripicon de sintomas" 
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
            >

            </textarea>
        </div>

        <input type="submit" 
        className=" bg-blue-500 w-full rounded-md p-2 text-black uppercase font-bold hover:bg-blue-600 cursor-pointer transition-shadow"
        value={paciente.id ? "Editar Paciente" : "Agregar Nuevo Paciente"}
        
        />


      </form>
       

    </div>
  )
}

export default Formulario