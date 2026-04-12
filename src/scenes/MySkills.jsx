import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import FrontEndIcons from "../components/skillsIcons/FrontEndIcons";
import BackEndIcons from "../components/skillsIcons/BackEndIcons";
import DataBaseIcons from "../components/skillsIcons/DataBaseIcons";
import SkillImg from "../assets/skills-image.png";

const columnTitleClass =
  "mb-5 font-playfair text-2xl font-extrabold tracking-display md:text-3xl";

const MySkills = () => {
  return (
    <section id="skills" className="site-section isolate overflow-x-clip">
      <div className="site-stack">
        <motion.div
          className="mx-auto max-w-3xl text-center md:max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="font-playfair text-4xl font-extrabold tracking-display md:text-5xl">
            <span className="text-pdt-mint">MY</span>{" "}
            <span className="text-pdt-lemon">SKILLS</span>
          </h2>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-2/3 md:w-1/3" />
          </div>
          <p className="pdt-body-muted mx-auto mt-8 max-w-md">
            These are the technologies I&apos;ve worked with
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 w-full max-w-3xl px-2 md:mt-12 md:max-w-4xl md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex justify-center">
            <img
              alt="Skills"
              className="w-full max-w-[min(100%,520px)] rounded-md ring-2 ring-pdt-violet/45 ring-offset-4 ring-offset-pdt-bg shadow-pdt-glow"
              src={SkillImg}
            />
          </div>
        </motion.div>

        <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-12 px-2 pt-4 sm:px-4 md:mt-12 md:flex-row md:justify-between md:gap-8 md:px-0 lg:gap-10">
          <motion.div
            className="min-w-0 flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className={columnTitleClass}>
              <span className="text-pdt-mint">Front-End</span>{" "}
              <span className="text-pdt-lemon">Technologies</span>
            </h3>
            <FrontEndIcons />
          </motion.div>

          <motion.div
            className="min-w-0 flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className={columnTitleClass}>
              <span className="text-pdt-mint">Backend</span>{" "}
              <span className="text-pdt-lemon">Technologies</span>
            </h3>
            <BackEndIcons />
          </motion.div>

          <motion.div
            className="min-w-0 flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className={columnTitleClass}>
              <span className="text-pdt-mint">Data Bases</span>{" "}
              <span className="text-pdt-lemon">&amp; Other</span>
            </h3>
            <DataBaseIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
