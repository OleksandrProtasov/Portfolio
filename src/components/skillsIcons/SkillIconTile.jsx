const SkillIconTile = ({ src, alt, label }) => (
  <div className="flex min-h-[7.5rem] flex-col items-center rounded-xl border border-pdt-violet/20 bg-[rgba(53,45,122,0.38)] px-2 py-4 text-center shadow-sm shadow-pdt-violet/10 transition duration-300 hover:border-pdt-mint/35 hover:bg-[rgba(53,45,122,0.5)] hover:shadow-pdt-glow">
    <img
      className="h-10 w-10 shrink-0 object-contain"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
    <p className="mt-3 flex min-h-[2.75rem] w-full items-center justify-center text-center font-dmmono text-[12px] leading-snug text-pdt-tag">
      {label}
    </p>
  </div>
);

export default SkillIconTile;
