import { FaCheck } from "react-icons/fa";

const ThirdComponent = () => {
  return (
    <>
      <div className="w-2/3 bg-slate-800 mt-4 flex flex-col  justify-center p-4 rounded-lg mb-4">
        <h1 className="text-slate-200 text-3xl font-bold mb-4">
          Studies Plan:
        </h1>
        <div className="flex items-center">
          <FaCheck size={32} color="green" />
          <h1 className="text-lg ml-2">Front-End</h1>
        </div>
        <div className="flex items-center">
          <FaCheck size={32} color="green" />
          <h1 className="text-lg ml-2">Back-End</h1>
        </div>
        <div className="flex items-center">
          <FaCheck size={32} color="green" />
          <h1 className="text-lg ml-2">Relational Database</h1>
        </div>
        <div className="flex items-center">
          <FaCheck size={32} color="green" />
          <h1 className="text-lg ml-2">Non-Relational Database</h1>
        </div>
      </div>
    </>
  );
};

export default ThirdComponent;
