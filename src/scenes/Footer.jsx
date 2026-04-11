import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 border-t border-pdt-violet/40 bg-pdt-surface bg-gradient-to-b from-pdt-surface to-pdt-ink pt-10">
      <div className="mx-auto w-10/12">
        <SocialMediaIcons />
        <div className="text-center md:flex md:justify-between md:items-baseline">
          <p className="pdt-text-gradient font-playfair text-2xl font-semibold">
            Oleksandr Protasov
          </p>
          <p className="font-playfair text-md pdt-body-muted mt-4 md:mt-0">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
