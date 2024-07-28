"use client";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Cashtag", href: "#cashtag" },
  { name: "Games", href: "#games" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    (() => {
      const handler = () => {
        const pos = document.documentElement.scrollTop;

        if (pos > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handler);

      return () => window.removeEventListener("scroll", handler);
    })();
  }, []);

  return (
    <div
      className={`fixed bg-transparent z-[999] top-0 left-0 w-full h-header ${
        scrolled && "!bg-[#090f32]"
      }`}
    >
      <div className="h-full px-10 flex items-center justify-between">
        <div className="capitalize text-center text-[1.25rem] font-[500] leading-[1.15] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text cursor-pointer">
          <Link href={"/"}>
            Sadie&apos;s Highlimit <br /> Gameroom
          </Link>
        </div>

        <ul className="md:hidden flex items-center gap-10 text-[1.175rem] capitalize text-white/90 cursor-pointer font-medium">
          {navigation.map((item, i) => (
            <li
              key={i}
              className="hover:text-[#6a45ff] transition-all duration-200 cursor-pointer"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <button className="py-3 px-8 rounded-[.75rem] hover:text-white hover:transition-all hover:bg-gradient-to-r hover:from-primary hover:to-secondary bg-white/20 text-[1.2rem] leading-[1] capitalize text-white/80 font-medium">
            login
          </button>

          <div
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="hidden h-[3rem] cursor-pointer w-[3rem] rounded-full bg-gradient-to-r from-primary to-secondary md:inline-flex items-center justify-center"
          >
            {showMobileNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>

        {showMobileNav && <MobileMenu />}
      </div>
    </div>
  );
};

export default Navbar;
