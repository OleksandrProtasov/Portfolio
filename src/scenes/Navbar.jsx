import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const NAV_PAGES = ["Home", "Skills", "Experience", "Projects", "Contact"];

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  onNavigate,
  className = "",
}) => {
  const lowerCasePage = page.toLowerCase();
  const active = selectedPage === lowerCasePage;
  return (
    <AnchorLink
      className={`transition duration-300 ${
        active
          ? "font-medium text-pdt-lemon"
          : "text-pdt-body/80 hover:text-pdt-mint"
      } ${className}`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        onNavigate?.();
      }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const closeMenu = () => setIsMenuToggled(false);

  const navbarBackground = isTopOfPage
    ? ""
    : "border-b border-pdt-violet/30 bg-pdt-surface/90 shadow-pdt-glow backdrop-blur-md";

  const mobileMenuOpen = !isDesktop && isMenuToggled;

  useEffect(() => {
    if (isDesktop) setIsMenuToggled(false);
  }, [isDesktop]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 z-40 w-full py-6 ${navbarBackground}`}>
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <h4 className="font-playfair text-3xl font-extrabold tracking-display">
            <span className="text-pdt-violet">O</span>
            <span className="text-pdt-mint">P</span>
          </h4>

          {isDesktop ? (
            <div className="flex flex-wrap justify-end gap-x-10 gap-y-2 font-opensans text-sm font-normal lg:gap-x-14">
              {NAV_PAGES.map((page) => (
                <Link
                  key={page}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          ) : (
            <button
              className="rounded-full bg-pdt-mint p-2 text-pdt-ink shadow-md shadow-pdt-mint/40 transition hover:bg-pdt-lemon hover:text-pdt-ink"
              type="button"
              onClick={() => setIsMenuToggled(true)}
              aria-expanded={isMenuToggled}
              aria-controls="mobile-site-menu"
              aria-label="Open menu"
            >
              <img alt="" src={menuIcon} className="h-[22px] w-[22px]" />
            </button>
          )}
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-site-menu"
          className="fixed inset-0 z-[100] flex flex-col bg-pdt-bg pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="mx-auto flex w-5/6 shrink-0 items-center justify-between border-b border-pdt-violet/25 py-4">
            <p className="pdt-text-gradient font-playfair text-2xl font-extrabold tracking-display">
              Menu
            </p>
            <button
              type="button"
              className="rounded-full bg-pdt-violet/25 p-2.5 text-pdt-lemon transition hover:bg-pdt-mint/30 hover:text-pdt-lemon"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <img alt="" src={closeIcon} className="h-6 w-6" />
            </button>
          </div>

          <div className="mx-auto flex w-5/6 min-h-0 flex-1 flex-col justify-center gap-1 overflow-y-auto py-8 font-opensans">
            {NAV_PAGES.map((page) => (
              <Link
                key={page}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onNavigate={closeMenu}
                className="block rounded-xl px-4 py-4 text-center text-xl text-pdt-lemon/95 hover:bg-pdt-violet/15 hover:text-pdt-lemon"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
