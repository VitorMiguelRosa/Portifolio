import { TbTargetArrow } from "react-icons/tb";

const SecondComponent = () => {
  return (
    <>
      <div className="w-2/3 bg-slate-800 mt-4 flex flex-col  justify-center p-4 rounded-lg">
        <h1 className="text-slate-200 text-3xl font-bold mb-4">Objectives:</h1>
        <div className="flex items-center">
          <TbTargetArrow size={48} color="var(--ruby-color)" />
          <h1 className="text-lg ml-2">
            Help your Team to achieve the best results.
          </h1>
        </div>
        <div className="flex items-center">
          <TbTargetArrow size={48} color="var(--ruby-color)" />
          <h1 className="text-lg ml-2">
            Increase the productivity of the Team.
          </h1>
        </div>
        <div className="flex items-center">
          <TbTargetArrow size={48} color="var(--ruby-color)" />
          <h1 className="text-lg ml-2">
            Reach the goals of the project in the best way and time possible.
          </h1>
        </div>
        <div className="flex items-center">
          <TbTargetArrow size={48} color="var(--ruby-color)" />
          <h1 className="text-lg ml-2">
            Learn and grow with the Team, sharing knowledge and experiences.
          </h1>
        </div>
      </div>
    </>
  );
};

export default SecondComponent;
