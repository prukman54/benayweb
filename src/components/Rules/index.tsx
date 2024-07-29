import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

const Rules = () => {
  return (
    <div className="w-[90%] mx-auto my-section">
      <div className="mb-[1.5rem]">
        <SectionTitle title="Our <span>Rules</span>" />
      </div>

      <div className="rounded-[1.25rem] bg-white/10 border border-white/20 p-[1.75rem]">
        <Image
          className="w-full h-auto bg-center object-cover rounded-[1.25rem]"
          height={1000}
          width={1000}
          src="/images/rules.jpeg"
          alt="our rules"
        />
      </div>
    </div>
  );
};

export default Rules;
