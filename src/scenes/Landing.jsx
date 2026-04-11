import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImg from "../assets/profile-image.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const handleDownload = () => {
    fetch("Protasov_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Protasov_CV.pdf";
        alink.click();
      });
    });
  };

  return (
    <section
      id="home"
      className="gap-16 py-10 md:flex md:h-full md:items-center md:justify-between"
    >
      <div className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-left-20 before:-top-20 before:z-[-1] before:h-full before:w-full before:max-w-[400px] before:rounded-sm before:border-2 before:border-pdt-violet/70 before:shadow-pdt-glow md:before:max-w-[600px]"
          >
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] rounded-sm transition duration-500 hover:saturate-200 md:max-w-[600px]"
              src={ProfileImg}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={ProfileImg}
          />
        )}
      </div>

      <div className="z-30 mt-12 basis-2/5 md:mt-32">
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
          <p className="z-10 text-center font-playfair text-6xl md:text-start">
            <span className="text-white">Oleksandr </span>
            <span className="xs:relative xs:font-semibold z-20 pdt-text-gradient before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Protasov
            </span>
          </p>

          <p className="pdt-body-muted mb-7 mt-10 text-center text-sm md:text-start">
            I am a dedicated Full-Stack Developer with experience in helping
            companies develop user-friendly web applications, a strong eye for
            innovative design, and a keen understanding of modern techniques. I
            am specializing in React, NodeJS, HTML, CSS, and JavaScript.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 flex flex-wrap justify-center gap-0 md:justify-start"
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
            className="pdt-btn-primary rounded-l-md rounded-r-none"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <div className="inline-flex rounded-r-md bg-gradient-rainblue p-0.5 pl-0">
            <button
              type="button"
              className="pdt-btn-secondary rounded-r-md rounded-l-none border-0 px-10"
              onClick={handleDownload}
            >
              Resume
            </button>
          </div>
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
