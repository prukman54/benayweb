import Image from "next/image";
import React from "react";

const SERVICES = [
  {
    icon: "/icons/support.svg",
    title: "Lightning-Fast Support",
    text: "We provide quick assistance for all your gaming needs and inquiries, 24/7.",
  },
  {
    icon: "/icons/engagement.svg",
    title: "Active Social Engagement",
    text: "Connect with us on Facebook and Instagram for the latest updates and promotions.",
  },
  {
    icon: "/icons/community.svg",
    title: "Trusted Player Community",
    text: "Join over 700 satisfied players enjoying our seamless gaming experience and exceptional services.",
  },
];

const Services = () => {
  return (
    <div id="services" className="mx-auto w-[90%] border border-white/20 rounded-[2rem] grid grid-cols-12">
      {SERVICES.map((item, i) => (
        <div
          key={i}
          className="md:col-span-12 md:first:border-b md:last:border-t md:first:border-r-0 md:last:border-l-0 first:border-r first:border-white/20 last:border-l last:border-white/20 col-span-4 h-full py-[2.5rem] px-[3rem]"
        >
          <Image
            className="mb-[1.5rem]"
            height={50}
            width={50}
            src={item.icon}
            alt="Icon"
          />
          <h2 className="mb-[1.25rem] text-[1.35rem] capitalize font-medium">
            {item.title}
          </h2>

          <p className="text-[1.1rem] text-white/70">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
