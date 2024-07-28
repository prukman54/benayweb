import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="grid grid-cols-12 items-center gap-[2.5rem] w-[90%] mx-auto mb-section md:gap-0 md:gap-y-[5rem]">
      <div className="md:col-span-12 col-span-6">
        <Image
          className="w-[70%] mx-auto h-auto"
          height={500}
          width={500}
          src={"/images/about.webp"}
          alt="3d icon"
        />
      </div>

      <div className="md:col-span-12 col-span-6">
        <span className="md:text-[1rem] capitalize text-white/30 text-[1.25rem]">
          about Sadie&apos;s Highlimit Gameroom
        </span>

        <h1 className="md:text-[2.75rem] text-[3.25rem] mt-[1.5rem] mb-[2.5rem] leading-[1.16] tracking-tight font-medium capitalize">
          Play unlimited
          <span className="px-[.5rem] inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            casino
          </span>{" "}
          <br />
          games & win prizes.
        </h1>

        <div className="md:text-[1rem] text-[1.15rem] mb-[2.5rem] text-white/70 leading-[1.75] flex flex-col gap-[2.5rem]">
          <p>
            Welcome to Sadie&apos;s Highlimit Gameroom, where tradition meets
            excellence in online gaming. Established in 2019, we have been
            providing top-notch casino entertainment for over 4 years. Our
            commitment to fair play, customer satisfaction, and innovative
            gaming has made us a trusted name in the industry.
          </p>

          <p>
            At Sadie&apos;s Highlimit Gameroom, we offer a wide variety of
            games, including classic slots, table games, and live dealer
            experiences, all designed to deliver the thrill and excitement of a
            real casino from the comfort of your home. Our platform is powered
            by leading software providers, ensuring smooth gameplay and stunning
            graphics.
          </p>
        </div>
        <button className="py-4 px-10 tracking-wide rounded-full text-white bg-gradient-to-r from-primary hover:bg-gradient-to-l hover:transition-all to-secondary bg-white/20 text-[1rem] leading-[1] uppercase font-medium cursor-pointer duration-300">
          play games
        </button>
      </div>
    </div>
  );
};

export default About;
