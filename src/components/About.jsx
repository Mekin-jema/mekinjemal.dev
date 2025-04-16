import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="sm:w-[250px] w-5/6
     "
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[288px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="ttitle" className="w-16  h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("right", "tween", 0.1, 1, "easeInOut")}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I'm a skilled software developer with experiene in Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reprehenderit nemo dolore at quia
        possimus quam debitis optio earum suscipit soluta deserunt unde corporis
        vitae natus sunt obcaecati veniam, nulla atque. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Unde consectetur, porro laborum
        laudantium illum corrupti vitae magni deserunt. Impedit consectetur
        aspernatur nobis cum praesentium ut aliquam corporis dolores labore
        ducimus?
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className=" flex items-center justify-center py-5 max-w-7xl mx-auto">
        <a href="#experience">
          <div className="w-[35px]  h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            ></motion.div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
