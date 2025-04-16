import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-10">
      <h1 className=" font-bold text-[30px] items-center flex justify-center">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center sm:w-3/4 mx-auto">
        {technologies.map((technology) => (
          <div className="w-28 h-28 flex " key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
