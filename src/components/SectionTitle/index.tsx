import React from "react";

interface Props {
  title: string;
  text?: string;
}

const SectionTitle = ({ title, text }: Props) => {
  return (
    <div className="SectionTitle flex flex-col items-center gap-4">
      <h3
        className="text-[2.5rem] text-white/90 leading-[1.16] tracking-tight font-medium capitalize"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      {text && <p className="text-[1.25rem] text-white/60">{text}</p>}
    </div>
  );
};

export default SectionTitle;
