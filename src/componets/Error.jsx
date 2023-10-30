

const Error = ({mensaje}) => {
  return (
    <div className=" bg-red-800 text-center uppercase text-white font-bold mb-5 px-3 py-3 rounded-lg">
          <p>
            {mensaje}
          </p>

        </div> 
  )
}

export default Error