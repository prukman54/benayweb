import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

const Gallery = () => {
  return (
    <div id="games" className="w-[90%] mx-auto mb-section">
      <div className="mb-[3.5rem]">
        <SectionTitle
          title="Our <span>Features</span> Games"
          text="Play unlimited games & win unlimited cash."
        />
      </div>

      <div className="grid grid-cols-12 gap-[2rem] md:gap-0 md:gap-y-[2.5rem]">
        {Array.from({ length: 4 }).map((item, i) => {
          return (
            <div key={i} className="col-span-6 md:col-span-12">
              <div className="group cursor-pointer relative w-full h-[25rem] overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  className="w-full h-full bg-center object-cover"
                  height={500}
                  width={500}
                  src={"/images/game-1.jpg"}
                  alt="Games Image"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute transition-all group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-[100%] left-0 bottom-0 pl-[2.5rem] pb-[2rem] pr-[15%] z-20">
                  <h2 className="capitalize leading-[1] mb-[.5rem] font-medium text-[2.5rem] drop-shadow-md text-white">
                    Vault 777
                  </h2>
                  <p className="text-[1.2rem] text-white/80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, neque?
                  </p>

                  <button className="px-7 leading-[1] py-3 bg-transparent border border-white/80 uppercase text-[1rem] font-medium text-white/90 rounded-full mt-[1.5rem]">
                    play now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
