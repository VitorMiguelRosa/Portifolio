import { DiRuby } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const FirstComponent = () => {
  return (
    <>
      <div className="w-2/3 bg-slate-800 mt-24 flex flex-col  items-center justify-center p-4 rounded-lg">
        <h1 className="text-slate-200 text-3xl font-bold">My Stack:</h1>
        <DiRuby size={48} color="var(--ruby-color)" />{" "}
        <h1 className="text-(--ruby-color) text-2xl">Ruby</h1>
        <IoLogoJavascript size={48} color="var(--js-color)" />{" "}
        <h1 className="text-(--js-color) text-2xl">JavaScript</h1>
        <SiTypescript size={48} color="var(--ts-color)" />{" "}
        <h1 className="text-(--ts-color) text-2xl">TypeScript</h1>
        <RiTailwindCssFill size={48} color="var(--tailwind-color)" />{" "}
        <h1 className="text-(--tailwind-color) text-2xl">Tailwind</h1>
      </div>
    </>
  );
};

export default FirstComponent;
