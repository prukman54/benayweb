import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    name: "facebook",
    link: "#",
    icon: <FaFacebookF />,
  },
  {
    name: "instagram",
    link: "#",
    icon: <IoLogoInstagram />,
  },
  {
    name: "twitter",
    link: "#",
    icon: <FaXTwitter />,
  },
  {
    name: "tiktok",
    link: "#",
    icon: <FaTiktok />,
  },
];

const LINKS = [
  { name: "About", href: "#", current: true },
  { name: "Cashtag", href: "#", current: false },
  { name: "Games", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

const CONTACTS = ["+977 9821991018", "+977 9836267222", "support@casino.com"];

const Footer = () => {
  return (
    <div className="relative">
      <div className="w-[80%] md:w-[90%] z-10 relative mx-auto mt-section bg-white/[.125] backdrop-blur-sm rounded-[1.5rem] py-[2.5rem] px-[2.5rem] grid grid-cols-12 gap-[2.5rem] md:gap-0 md:gap-y-[2.5rem]">
        <div className="col-span-4 md:col-span-12">
          <div className="capitalize text-left mb-[1.5rem] text-[1.35rem] font-[500] leading-[1.15] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text cursor-pointer">
            Sadie&apos;s Highlimit <br /> Gameroom
          </div>

          <p className="text-[1.1rem] mb-[1.5rem] leading-[1.35] text-white/70">
            Experience legit gaming with fast service online.
          </p>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((item, i) => {
              return (
                <div
                  key={i}
                  className="transition-all hover:border-none hover:bg-gradient-to-tr hover:from-primary hover:to-secondary cursor-pointer h-[2.75rem] w-[2.75rem] rounded-full border border-white/20 flex items-center justify-center"
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-4 text-center md:col-span-12">
          <h3 className="uppercase font-medium text-white/80 mb-[1.25rem]">
            connect
          </h3>

          <ul className="inline-flex items-center flex-col gap-3 text-white/80 lowercase">
            {CONTACTS.map((item, i) => (
              <li className="leading-[1]" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 text-center md:col-span-12">
          <h3 className="uppercase font-medium text-white/80 mb-[1.25rem]">
            links
          </h3>

          <ul className="inline-flex items-center flex-col gap-3 text-white/80 lowercase">
            {LINKS.map((item, i) => (
              <li
                key={i}
                className="capitalize cursor-pointer hover:text-primary relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-transparent before:translate-y-[10px] hover:before:bg-primary hover:before:translate-y-0 before:transition-all"
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* <form className="flex flex-col gap-4">
            <input
              className="bg-[#090f32]/40 py-5 rounded-[.85rem] px-6 text-white outline-none border-none text-[1.15rem] placeholder:font-[500] leading-[1] placeholder:capitalize"
              type="text"
              placeholder="name"
            />

            <input
              className="bg-[#090f32]/40 py-5 rounded-[.85rem] px-6 text-white outline-none border-none text-[1.15rem] placeholder:font-[500] leading-[1] placeholder:capitalize"
              type="email"
              placeholder="email"
            />
            <input
              className="py-4 px-10 tracking-wide rounded-[.85rem] text-white bg-gradient-to-r from-primary hover:bg-gradient-to-l hover:transition-all to-secondary bg-white/20 text-[1rem] leading-[1] uppercase font-medium cursor-pointer duration-300"
              type="submit"
              value={"submit"}
            />
          </form> */}
        </div>
      </div>
      <p className="text-center mt-4 text-white/70 capitalize text-sm">
        all right reserved by{" "}
        <span className="text-primary cursor-pointer">
          Sadie&apos;s Highlimit <br /> Gameroom
        </span>
      </p>
      <div className="h-[9rem] w-[9rem] absolute right-[10rem] top-0 z-0 translate-y-[-50%] translate-x-[50%] bg-gradient-to-bl from-primary to-secondary rounded-full"></div>
    </div>
  );
};

export default Footer;
