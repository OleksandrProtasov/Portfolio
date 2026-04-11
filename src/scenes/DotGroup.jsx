import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-pdt-coral shadow-md shadow-pdt-coral/50 ring-2 ring-pdt-lemon ring-offset-2 ring-offset-[#0d0d0d]`;

  const idleStyles =
    "bg-white/15 ring-1 ring-pdt-violet/30 hover:bg-pdt-violet/25";

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
