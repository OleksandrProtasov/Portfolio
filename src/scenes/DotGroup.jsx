import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-pdt-violet shadow-md shadow-pdt-violet/45 ring-2 ring-pdt-mint ring-offset-2 ring-offset-pdt-bg`;

  const idleStyles =
    "bg-pdt-lemon/12 ring-1 ring-pdt-violet/30 hover:bg-pdt-violet/25";

  return (
    <div className="fixed right-7 top-[60%] z-30 flex flex-col gap-6 md:right-8">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : idleStyles
        } h-3 w-3 rounded-full transition-all duration-300`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : idleStyles
        } h-3 w-3 rounded-full transition-all duration-300`}
        onClick={() => setSelectedPage("skills")}
      />

      <AnchorLink
        href="#experience"
        className={`${
          selectedPage === "experience" ? selectedStyles : idleStyles
        } h-3 w-3 rounded-full transition-all duration-300`}
        onClick={() => setSelectedPage("experience")}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : idleStyles
        } h-3 w-3 rounded-full transition-all duration-300`}
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : idleStyles
        } h-3 w-3 rounded-full transition-all duration-300`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
