import { BsLinkedin, BsTelegram } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

const link =
  "rounded-full p-2 text-white/80 transition duration-300 hover:scale-110";

const SocialMediaIcons = () => {
  return (
    <div className="my-10 flex justify-center gap-5 md:justify-start md:gap-6">
      <a
        className={`${link} hover:text-pdt-violet hover:shadow-pdt-glow`}
        href="https://www.linkedin.com/in/oleksandr-protasov/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin size={40} />
      </a>
      <a
        className={`${link} hover:text-pdt-mint hover:shadow-pdt-glow-mint`}
        href="https://github.com/OleksandrProtasov"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={40} />
      </a>
      <a
        className={`${link} hover:text-pdt-lemon hover:shadow-pdt-glow-mint`}
        href="https://t.me/OleksandrProtasov"
        target="_blank"
        rel="noreferrer"
        aria-label="Telegram"
      >
        <BsTelegram size={40} />
      </a>
      <a
        className={`${link} hover:text-pdt-coral hover:shadow-pdt-glow`}
        href="https://www.instagram.com/aleks.protasov/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={40} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
