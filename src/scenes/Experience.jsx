import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const cardClass =
  "rounded-xl border border-pdt-violet/20 bg-[rgba(53,45,122,0.38)] p-6 md:p-8";

const metaClass =
  "font-dmmono text-[12px] uppercase tracking-wider text-pdt-tag";

const titleClass =
  "mt-2 font-opensans text-xl font-bold tracking-tight text-pdt-lemon md:text-2xl";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardMotion = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.45 },
  variants: cardVariants,
};

const BulletList = ({ items }) => (
  <ul className="mt-4 space-y-3 pl-1 font-opensans text-sm font-normal leading-relaxed text-pdt-body md:text-base">
    {items.map((text, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pdt-mint" />
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

const ExperienceCard = ({ meta, title, items, delay = 0 }) => (
  <motion.article
    className={cardClass}
    {...cardMotion}
    transition={{ duration: 0.45, delay }}
  >
    {meta ? <p className={metaClass}>{meta}</p> : null}
    {title ? <h3 className={titleClass}>{title}</h3> : null}
    <BulletList items={items} />
  </motion.article>
);

const Experience = () => {
  return (
    <section id="experience" className="site-section">
      <motion.div
        className="mx-auto max-w-3xl text-center md:max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="font-playfair text-4xl font-extrabold tracking-display md:text-5xl">
          <span className="text-pdt-mint">EX</span>
          <span className="text-pdt-lemon">PERIENCE</span>
        </h2>
        <div className="mt-5 flex justify-center">
          <LineGradient width="w-2/3 md:w-1/3" />
        </div>
      </motion.div>

      <div className="site-stack mx-auto mt-10 max-w-3xl md:mt-12 md:max-w-4xl">
        <ExperienceCard
          meta="Naistaxi · Finland · 2025–2026"
          title="Mobile app developer"
          items={[
            "Developed a cross-platform mobile application using React Native.",
            "Implemented user authentication flows (registration, login, session management).",
            "Built the main screen with real-time data display and intuitive navigation.",
            "Integrated interactive maps and turn-by-turn navigation using OpenStreetMap (react-native-maps, Leaflet).",
            "Ensured smooth performance and responsive layouts across iOS and Android devices.",
          ]}
        />

        <motion.article
          className={cardClass}
          {...cardMotion}
          transition={{ duration: 0.45, delay: 0.04 }}
        >
          <p className={metaClass}>Freelance / self-employed · 2023 – present</p>
          <h3 className={titleClass}>AI trading bot</h3>
          <BulletList
            items={[
              "Designed and built an AI-powered trading bot using Python and machine learning.",
              "Trained ML models on historical market chart data to identify patterns and trends.",
              "Implemented real-time market data analysis with live signal generation.",
              "Provided actionable information on potential entry points for trades.",
              "Developed support for multiple trading strategies with configurable parameters.",
              "Iterated on model accuracy through backtesting and performance evaluation.",
            ]}
          />
          <div className="my-8 border-t border-pdt-violet/15" />
          <p className={metaClass}>Internal web platform · enterprise</p>
          <h3 className={titleClass}>Enterprise quality management app</h3>
          <BulletList
            items={[
              "Built an internal web application for a production enterprise: form submissions, real-time analytics dashboard, and inter-department communication module.",
              "Designed intuitive UI/UX tailored to factory floor workflows.",
              "Managed relational and non-relational databases: MongoDB, SQL.",
            ]}
          />
        </motion.article>

        <ExperienceCard
          meta="Unfair Advantage · Finland · 2022"
          title="Full-stack developer"
          items={[
            "Performed development tasks and implemented new features requested by customers.",
            "Identified and fixed defects and bugs across the application stack.",
            "Developed and maintained test plans, test cases, and test scripts; documented results in JIRA.",
            "Created adaptive layouts for various devices and browsers using media queries.",
            "Built functional apps using React, Semantic UI, and Material UI.",
          ]}
          delay={0.06}
        />
      </div>
    </section>
  );
};

export default Experience;
