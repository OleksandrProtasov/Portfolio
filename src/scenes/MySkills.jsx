import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import FrontEndIcons from "../components/skillsIcons/FrontEndIcons";
import BackEndIcons from "../components/skillsIcons/BackEndIcons";
import DataBaseIcons from "../components/skillsIcons/DataBaseIcons";
import SkillImg from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pb-24 pt-10">
      <div className="mt-32 md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-5 font-playfair text-4xl font-semibold text-white">
            MY <span className="pdt-text-gradient">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="pdt-body-muted mb-7 mt-10">
            These are the technologies I've worked with
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-left-10 before:-top-10 before:z-[-1]
              before:h-full before:w-full before:rounded-sm before:border-2 before:border-pdt-violet/60 before:shadow-pdt-glow"
            >
              <img alt="skills" className="z-10 rounded-sm" src={SkillImg} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={SkillImg} />
          )}
        </div>
      </div>

      <div className="mt-16 gap-32 md:flex md:justify-between">
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-3xl font-semibold text-pdt-mint">
                Front-End
              </p>
              <p className="ml-7 mt-3 font-playfair text-3xl font-semibold text-white/90">
                Technologies
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 rounded-sm bg-pdt-mint/25 md:w-3/4" />
          </div>
          <FrontEndIcons />
        </motion.div>

        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-3xl font-semibold text-pdt-coral">
                Backend
              </p>
              <p className="ml-7 mt-3 font-playfair text-3xl font-semibold text-white/90">
                Technologies
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 rounded-sm bg-pdt-coral/25 md:w-3/4" />
          </div>
          <BackEndIcons />
        </motion.div>

        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-3xl font-semibold text-pdt-lemon">
                Data Bases
              </p>
              <p className="ml-7 mt-3 font-playfair text-3xl font-semibold text-white/90">
                & Other
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 rounded-sm bg-pdt-lemon/25 md:w-3/4" />
          </div>
          <DataBaseIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
