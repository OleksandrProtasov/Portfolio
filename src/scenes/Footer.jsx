import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="border-t border-pdt-violet/20 bg-gradient-to-b from-pdt-ink/90 to-pdt-bg py-16 md:py-20">
      <div className="mx-auto w-5/6 max-w-6xl">
        <SocialMediaIcons className="my-0 mb-10 justify-center md:justify-start" />
        <div className="text-center md:flex md:justify-between md:items-baseline">
          <p className="pdt-text-gradient font-playfair text-2xl font-extrabold tracking-display">
            Oleksandr Protasov
          </p>
          <p className="mt-4 font-opensans text-sm font-normal pdt-body-muted md:mt-0">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
