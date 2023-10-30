import { useState,useEffect } from "react"
import Pacientes from "./Pacientes"



const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(()  => {
    if (pacientes.length > 0) {
      console.log("Nuevo Paciente Agregado")
    }
    
  
  }, [pacientes])


  return (
    <div className=" md:w-1/2 md:lg:w-3/5 md:h-screen overflow-y-scroll">
       

      {pacientes && pacientes.length ? (
        <>
          <h2 className=" text-center text-3xl font-black">
            Listado Pacientes
          </h2>

            <p className=" text-center mt-5 text-lg mb-10">
            Administrar tus {""}
            <span className=" text-blue-600 font-bold"> Pacientes y Citas </span>

            </p>

            {pacientes.map( (paciente)=> (

            <Pacientes
            key={paciente.id}
            paciente = {paciente}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
            />

            ))}
        </>

      ): 
      
      <>
      <h2 className=" text-center text-3xl font-black">
      No Hay Pacientes
      </h2>

      <p className=" text-center mt-5 text-lg mb-10">
      Comienza ingresando pacientes {""}
      <span className=" text-blue-600 font-bold"> y apareceran en este lugar </span>

      </p>
      </>


      }

    </div>
  )
}

export default ListadoPacientes