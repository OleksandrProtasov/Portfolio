import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  const active = selectedPage === lowerCasePage;
  return (
    <AnchorLink
      className={`transition duration-300 ${
        active
          ? "font-semibold text-pdt-lemon"
          : "text-white/65 hover:text-pdt-mint"
      }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "border-b border-pdt-violet/30 bg-pdt-surface/90 shadow-pdt-glow backdrop-blur-md";

  return (
    <nav className={`${navbarBackground} fixed top-0 z-40 w-full py-6`}>
      <div className="mx-auto flex w-5/6 items-center justify-between">
        <h4 className="font-playfair text-3xl font-bold tracking-tight">
          <span className="text-pdt-violet">O</span>
          <span className="text-pdt-mint">P</span>
        </h4>

        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-pdt-coral p-2 text-white shadow-md shadow-pdt-coral/40 transition hover:bg-pdt-lemon hover:text-pdt-ink"
            type="button"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            aria-label="Open menu"
          >
            <img alt="" src={menuIcon} className="h-[22px] w-[22px]" />
          </button>
        )}

        {!isDesktop && isMenuToggled && (
          <div className="fixed bottom-0 right-0 h-full w-[300px] border-l border-pdt-violet/25 bg-pdt-surface/98 shadow-2xl shadow-pdt-violet/20">
            <div className="flex justify-end p-12">
              <button
                type="button"
                className="rounded-full p-2 text-pdt-mint transition hover:bg-pdt-violet/20 hover:text-white"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                aria-label="Close menu"
              >
                <img alt="" src={closeIcon} className="h-6 w-6" />
              </button>
            </div>

            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
