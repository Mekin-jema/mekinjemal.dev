import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  index,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0, 75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl  sm:w-[360px]  w-full"
      >
        <div className=" relative w-full h-[230px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl "
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <motion.p
            variants={fadeIn("left", "tween", 0.1, 1, "easeInOut")}
            className=" text-secondary text-[14px]"
          >
            {description}
          </motion.p>
        </div>
        <div className=" mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="">
      <motion.div variants={textVariant(0.9)}>
        <p className={styles.sectionSubText}>My Works </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className=" w-full flex ">
        <motion.p
          variants={fadeIn("right", "tweek", 0.1, 1, "easeInOut")}
          className="mt-3 text-secondary
         text-[17px] maxw-3xl leading-[30px]"
        >
          Follwoing Projects shocases my skills and experiace through real-world
          examples of my work. Each project is briefly described with link to
          code repositories and live demos in it.It reflects my ability to slove
          complex problems ,work with diffrent technologies ad manage projects
          effectively
        </motion.p>
      </div>
      <div className="mt-20 flex  flex-wrap gap-7 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={`porject-${index}`} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "project");
