
const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre,propietario,email,fecha,sintomas,id} = paciente
const handlerEliminar = () => {

const respuesta = confirm("Deseas eliminar este paciente")
if (respuesta) {
  eliminarPaciente(id)
}
}


  return (
    
    <div className=" bg-white w-full rounded-lg m-5  px-5 py-5">
    <p className=" font-semibold mb-1">
      Nombre: {""}
      <span className=" font-normal normal-case"> {nombre} </span>
    </p>

    <p className=" font-semibold mb-1">
      Propietario: {""}
      <span className=" font-normal normal-case"> {propietario}  </span>
    </p>

    <p className=" font-semibold mb-1">
      Email: {""}
      <span className=" font-normal normal-case"> {email} </span>
    </p>


    <p className=" font-semibold mb-1">
      Alta: {""}
      <span className=" font-normal normal-case"> {fecha} </span>
    </p>

    <p className=" font-semibold mb-1">
      Sintomas: {""}
      <span className=" font-normal normal-case"> {sintomas} </span>
    </p>

    <div className=" flex justify-between mt-10" >

    <button
    type = "button"
    className=" py-2 px-6 bg-blue-700 hover:bg-blue-800 text-white font-bold uppercase rounded-lg"
    onClick={() => setPaciente(paciente)}
    >
      Editar
    </button>

    <button
    type = "button"
    className=" py-2 px-6 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-lg mr-7" 
    onClick={handlerEliminar}
    >
      Eliminar
    </button>

    </div>




  </div>
  )
}

export default Pacientes