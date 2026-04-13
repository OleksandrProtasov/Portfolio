import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImg from "../assets/profile-image.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const handleDownload = () => {
    fetch("Protasov_CV_Dev.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Protasov_CV_Dev.pdf";
        alink.click();
      });
    });
  };

  return (
    <section
      id="home"
      className="site-section--hero flex flex-col gap-12 md:min-h-[calc(100dvh-5rem)] md:flex-row md:items-center md:justify-between md:gap-16"
    >
      <div className="z-10 flex basis-3/5 justify-center md:order-2 md:mt-0">
        {isAboveLarge ? (
          <div
            className="group relative z-0 ml-20 before:pointer-events-none before:absolute before:-left-20 before:-top-20 before:z-[-1] before:h-full before:w-full before:max-w-[400px] before:rounded-xl before:border-2 before:border-pdt-violet/70 before:shadow-pdt-glow before:transition before:duration-300 before:content-[''] group-hover:before:border-pdt-mint/45 group-hover:before:shadow-pdt-glow-mint md:before:max-w-[600px]"
          >
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] rounded-xl md:max-w-[600px]"
              src={ProfileImg}
            />
          </div>
        ) : (
          <div className="group inline-block overflow-hidden rounded-xl ring-2 ring-pdt-violet/40 ring-offset-4 ring-offset-pdt-bg transition duration-300 group-hover:ring-pdt-mint/40 group-hover:shadow-pdt-glow-mint">
            <img
              alt="profile"
              className="z-10 block w-full max-w-[400px] rounded-xl md:max-w-[600px]"
              src={ProfileImg}
            />
          </div>
        )}
      </div>

      <div className="z-30 basis-2/5 md:mt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-10 text-center font-playfair text-6xl font-extrabold tracking-display md:text-start">
            <span className="text-pdt-lemon">Oleksandr </span>
            <span className="xs:relative z-20 pdt-text-gradient before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Protasov
            </span>
          </p>

          <p className="pdt-body-muted mx-auto mb-7 mt-10 max-w-xl text-center text-sm leading-relaxed md:mx-0 md:text-start md:text-base">
            AI Developer with strong expertise in React, JavaScript, Java, and
            Python. Experienced in building AI-powered tools, mobile
            applications, and scalable web platforms. Skilled in machine
            learning, full-stack development, and integrating intelligent
            systems into real-world products. Focused on continuous learning and
            applying modern AI technologies to solve complex problems.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="pdt-btn-primary"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <button
            type="button"
            className="pdt-btn-secondary px-10"
            onClick={handleDownload}
          >
            Resume
          </button>
        </motion.div>

        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
