import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import TypeScript from "../../assets/typescript.png";
import NextJs from "../../assets/nextjs.svg";
import SkillIconTile from "./SkillIconTile";

const items = [
  { src: HTML, label: "HTML", alt: "HTML icon" },
  { src: CSS, label: "CSS", alt: "CSS icon" },
  { src: JavaScript, label: "JavaScript", alt: "JavaScript icon" },
  { src: ReactImg, label: "React", alt: "React icon" },
  { src: TypeScript, label: "TypeScript", alt: "TypeScript icon" },
  { src: NextJs, label: "Next.js", alt: "Next.js icon" },
];

const FrontEndIcons = () => (
  <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
    {items.map(({ src, label, alt }) => (
      <SkillIconTile key={label} src={src} alt={alt} label={label} />
    ))}
  </div>
);

export default FrontEndIcons;
