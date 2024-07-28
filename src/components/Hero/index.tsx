import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="pt-[2rem] md:pt-[1rem] w-full min-h-[calc(100vh-5rem)] h-auto mb-[15rem]">
      <div className="grid grid-cols-12 items-center gap-[2.5rem] w-[90%] mx-auto mt-[7.5rem] md:gap-0 md:gap-y-[5rem]">
        <div className="md:col-span-12 col-span-7">
          <h1 className="md:text-[3.5rem] text-[5.5rem] leading-[1.16] tracking-tight font-medium capitalize">
            Enjoy{" "}
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              ultimate
            </span>{" "}
            <br />
            Casino Experience
          </h1>

          <p className="md:text-[1.25rem] text-[1.45rem] text-white/80 my-[2.5rem]">
            Join 700+ players enjoying legit, lightning-fast online casino
            service on Facebook and Instagram.
          </p>

          <button className="py-4 px-10 tracking-wide  rounded-full text-white bg-gradient-to-r from-primary hover:bg-gradient-to-l hover:transition-all to-secondary bg-white/20 text-[1rem] leading-[1] uppercase font-medium cursor-pointer duration-300">
            play games
          </button>
        </div>

        <div className="md:col-span-12 col-span-5">
          <div className="w-full h-[35rem] overflow-hidden rounded-[1.75rem]">
            <Image
              className="w-full h-full bg-center object-cover"
              width={600}
              height={1000}
              src={"/images/hero.jpg"}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
