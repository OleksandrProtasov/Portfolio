import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1Img from "../assets/project-1.jpeg";
import project2Img from "../assets/project-2.jpeg";
import project3Img from "../assets/project-3.jpeg";
import project4Img from "../assets/project-4.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, href, description, src }) => {
  const overlayStyles = `absolute z-30 flex h-full w-full flex-col items-center justify-center bg-grey/95 p-16 text-center text-pdt-ink opacity-0 transition duration-500 hover:opacity-95`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  const inner = (
    <>
      <p className="font-playfair text-2xl font-semibold text-pdt-violet">
        {title}
      </p>
      <p className="mt-7 text-pdt-ink/85">{description}</p>
    </>
  );

  return (
    <motion.div variants={projectVariant} className="relative">
      {href ? (
        <a
          href={href}
          className={overlayStyles}
          target="_blank"
          rel="noreferrer noopener"
        >
          {inner}
        </a>
      ) : (
        <div className={`${overlayStyles} cursor-default`}>{inner}</div>
      )}
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pb-48 md:pt-80">
      <motion.div
        className="mx-auto text-center md:w-2/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair text-4xl font-semibold">
            <span className="text-pdt-mint">PRO</span>
            <span className="text-white">JECTS</span>
          </p>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="pdt-body-muted mb-10 mt-10">
          You could check the implemented projects out below
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex max-h-[400px] max-w-[400px] items-center justify-center border border-pdt-lemon/30 bg-yellow p-10 text-center font-playfair text-2xl font-semibold text-pdt-ink shadow-pdt-glow-mint">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            href="https://oleksandrprotasov.github.io/Todo_list_application/"
            src={project1Img}
            description="Todo list Application"
          />
          <Project
            title="Project 2"
            src={project2Img}
            href="https://oleksandrprotasov.github.io/React_Weather_app/"
            description="React Weather App"
          />

          <Project
            title="Project 3"
            src={project3Img}
            href="https://oleksandrprotasov.github.io/quizlet_React/"
            description="Quizlet Game React"
          />
          <Project
            title="Project 4"
            description="Coming Soon"
            src={project4Img}
          />
          <div className="flex max-h-[400px] max-w-[400px] items-center justify-center border border-pdt-mint/35 bg-blue p-10 text-center font-playfair text-2xl font-semibold text-pdt-ink shadow-pdt-glow">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
