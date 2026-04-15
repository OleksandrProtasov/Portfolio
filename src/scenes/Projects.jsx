import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1Img from "../assets/project-1.webp";
import project2Img from "../assets/project-2.webp";
import project3Img from "../assets/project-3.webp";
import project4Img from "../assets/project-4.webp";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/** Единая «рамка» ячейки: картинка целиком (object-contain), без обрезки по краям */
const cellFrameClass =
  "w-full max-w-[min(400px,calc(100vw-2rem))] min-w-0 justify-self-center aspect-[4/3]";

const featureCellClass = `${cellFrameClass} flex flex-col items-center justify-center border border-pdt-lemon/30 bg-yellow p-5 text-center font-playfair text-lg font-extrabold tracking-display text-pdt-ink shadow-pdt-glow-mint ss:text-xl sm:p-8`;

const featureCellClassAlt = `${cellFrameClass} flex flex-col items-center justify-center border border-pdt-mint/35 bg-blue p-5 text-center font-playfair text-lg font-extrabold tracking-display text-pdt-ink shadow-pdt-glow ss:text-xl sm:p-8`;

/** Слой в фирменных тонах: фиолет + мята, как на сайте (pdt-theme) */
const projectImageTintClass =
  "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-pdt-violet/35 via-pdt-bg/20 to-pdt-mint/30 mix-blend-soft-light";

const projectImageVignetteClass =
  "pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(26,22,64,0.55)_100%)]";

const Project = ({ title, href, description, src }) => {
  const overlayStyles =
    "absolute inset-0 z-10 flex flex-col items-center justify-center bg-grey/95 p-6 text-center text-pdt-ink opacity-0 transition duration-500 hover:opacity-95 sm:p-10";
  const projectTitle = title.split(" ").join("-").toLowerCase();

  const inner = (
    <>
      <p className="font-playfair text-2xl font-extrabold tracking-display text-pdt-violet">
        {title}
      </p>
      <p className="mt-4 text-pdt-ink/85 sm:mt-7">{description}</p>
    </>
  );

  return (
    <motion.div
      variants={projectVariant}
      className={`${cellFrameClass} relative flex items-center justify-center overflow-hidden bg-pdt-bg shadow-[0_4px_28px_rgba(127,119,221,0.22)] ring-1 ring-inset ring-pdt-violet/15`}
    >
      <img
        src={src}
        alt={projectTitle}
        className="relative z-0 h-full w-full object-contain brightness-[0.96] saturate-[0.88] contrast-[1.02]"
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
        decoding="async"
      />
      <div className={projectImageTintClass} aria-hidden />
      <div className={projectImageVignetteClass} aria-hidden />
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
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="site-section">
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
          <p className="font-playfair text-4xl font-extrabold tracking-display">
            <span className="text-pdt-mint">PRO</span>
            <span className="text-pdt-lemon">JECTS</span>
          </p>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="pdt-body-muted mx-auto mt-8 max-w-md md:max-w-lg">
          You could check the implemented projects out below
        </p>
      </motion.div>

      <div className="mt-12 md:mt-16">
        <motion.div
          className="mx-auto grid w-full max-w-[1240px] grid-cols-1 justify-items-stretch gap-8 px-4 xs:grid-cols-2 sm:grid-cols-3 sm:gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={featureCellClass}>
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
            href="https://oleksandrprotasov.github.io/smartbasket/"
            description="SmartBasket"
            src={project4Img}
          />
          <div className={featureCellClassAlt}>
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

