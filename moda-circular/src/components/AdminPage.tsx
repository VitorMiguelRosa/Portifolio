import { FaImage } from "react-icons/fa"

const AdminPage = () => {
  return (
    <div className="flex justify-center mt-20 mx-4 bg-slate-300 p-4 rounded-3xl h-130">
        <div className="flex-col items-center">
            <input type="text" placeholder="Titulo" className="rounded-full p-2 my-2 flex h-8 bg-white"/>
            <input type="text" placeholder="Sobre" className=" rounded-full p-2 my-2 flex h-8 bg-white"/>
            <input type="text" placeholder="Preco" className="rounded-full p-2 my-2 flex h-8 bg-white"/>

        <label htmlFor="dropzone-file" className="flex-col items-center justify-center flex my-8 bg-slate-100 h-2/5 w-full rounded-3xl cursor-pointer">
            <FaImage size={60}/>
            <h1 className="font-bold">Imagem</h1>
            <input type="file" src="" id="dropzone-file" alt=""className="hidden"/>
        </label>

            <button className="bg-blue-500 w-full py-2 rounded-full cursor-pointer">
                <h1 className="text-white">Enviar</h1>
            </button>

        </div>
    </div>
  )
}

export default AdminPage