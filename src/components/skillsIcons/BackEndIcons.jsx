import NodeJs from "../../assets/nodejs.png";
import express from "../../assets/express.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import SkillIconTile from "./SkillIconTile";

const items = [
  { src: NodeJs, label: "NodeJs", alt: "Node.js" },
  { src: express, label: "Express", alt: "Express" },
  { src: java, label: "Java", alt: "Java" },
  { src: python, label: "Python", alt: "Python" },
];

const BackEndIcons = () => (
  <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
    {items.map(({ src, label, alt }) => (
      <SkillIconTile key={label} src={src} alt={alt} label={label} />
    ))}
  </div>
);

export default BackEndIcons;
