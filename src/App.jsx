import CustomCursor from "./components/CustomCursor";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import Experience from "./scenes/Experience";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sectionMotion = {
  hidden: {},
  visible: {},
};

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="mx-auto w-5/6">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          variants={sectionMotion}
          onViewportEnter={() => setSelectedPage("home")}
          viewport={{ amount: 0.45, margin: "0px 0px -35% 0px" }}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div className="site-divider">
        <LineGradient width="w-full" />
      </div>
      <div className="mx-auto w-5/6">
        <motion.div
          variants={sectionMotion}
          onViewportEnter={() => setSelectedPage("skills")}
          viewport={{ amount: 0.45, margin: "0px 0px -35% 0px" }}
        >
          <MySkills />
        </motion.div>
      </div>
      <div className="site-divider">
        <LineGradient width="w-full" />
      </div>
      <div className="w-5/6 mx-auto">
        <motion.div
          variants={sectionMotion}
          onViewportEnter={() => setSelectedPage("experience")}
          viewport={{ amount: 0.35, margin: "0px 0px -35% 0px" }}
        >
          <Experience />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto">
        <motion.div
          variants={sectionMotion}
          onViewportEnter={() => setSelectedPage("projects")}
          viewport={{ amount: 0.45, margin: "0px 0px -35% 0px" }}
        >
          <Projects />
        </motion.div>
      </div>
      <div className="site-divider">
        <LineGradient width="w-full" />
      </div>
      <div className="mx-auto w-5/6">
        <motion.div
          variants={sectionMotion}
          onViewportEnter={() => setSelectedPage("contact")}
          viewport={{ amount: 0.45, margin: "0px 0px -35% 0px" }}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
