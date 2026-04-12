import MongoDB from "../../assets/mongo.png";
import sql from "../../assets/sql.png";
import github from "../../assets/github.png";
import ubuntu from "../../assets/ubuntu.png";
import Cursor from "../../assets/cursor.png";
import Claude from "../../assets/claude.png";
import SkillIconTile from "./SkillIconTile";

const items = [
  { src: MongoDB, label: "MongoDB", alt: "MongoDB" },
  { src: sql, label: "SQL", alt: "SQL" },
  { src: github, label: "GitHub", alt: "GitHub" },
  { src: ubuntu, label: "Ubuntu", alt: "Ubuntu" },
  { src: Cursor, label: "Cursor", alt: "Cursor" },
  { src: Claude, label: "Claude", alt: "Claude" },
];

const DataBaseIcons = () => (
  <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
    {items.map(({ src, label, alt }) => (
      <SkillIconTile key={label} src={src} alt={alt} label={label} />
    ))}
  </div>
);

export default DataBaseIcons;
