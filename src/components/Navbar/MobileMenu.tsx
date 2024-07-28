import Link from "next/link";
import React from "react";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "About", href: "#", current: true },
  { name: "Cashtag", href: "#", current: false },
  { name: "Games", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

const MobileMenu = () => {
  return (
    <div className="select-none h-[100vh] z-[1000] overscroll-y-auto overflow-x-hidden bg-[#090f32] fixed top-0 left-0 w-[20rem] flex flex-col overflow-y-auto items-center pt-[2.5rem]">

      <div className="capitalize text-center text-[1.25rem] font-[500] leading-[1.15] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text cursor-pointer mb-[2.5rem]">
        Sadie&apos;s Highlimit <br /> Gameroom
      </div>

      <ul className="inline-flex flex-col items-center gap-5 text-[1.175rem] capitalize text-white/90 cursor-pointer font-medium">
        {navigation.map((item, i) => {
          return (
            <Link href={item.href || "/"} key={i}>
              <li
                className={`hover:text-[#6a45ff] transition-all duration-200 cursor-pointer`}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
