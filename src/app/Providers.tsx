"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "@/context/global";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <GlobalProvider>
        <ToastContainer position="top-center" />

        {/* shapes */}
        {pathname === "/" ? (
          <>
            <Image
              className="absolute right-0 top-[-10rem] block min-w-full z-0"
              height={600}
              width={600}
              src={"/shapes/1.svg"}
              alt="Shape one"
            />
            <Image
              className="absolute top-[6%] left-0 block min-w-full z-0"
              height={600}
              width={600}
              src={"/shapes/2.svg"}
              alt="Shape two"
            />
            <Image
              className="absolute top-[18%] left-0 block min-w-full z-0"
              height={600}
              width={600}
              src={"/shapes/3.svg"}
              alt="Shape three"
            />
            <Image
              className="absolute top-[34%] right-0 block min-w-full z-0"
              height={600}
              width={600}
              src={"/shapes/4.svg"}
              alt="Shape four"
            />
            {/* <Image
          className="absolute top-[47%] left-0 block min-w-full z-0"
          height={600}
          width={600}
          src={"/shapes/5.svg"}
          alt="Shape five"
        /> */}
            {/* <Image
          className="absolute top-[59%] right-0 block min-w-full z-0"
          height={600}
          width={600}
          src={"/shapes/6.svg"}
          alt="Shape six"
        />
        <Image
          className="absolute bottom-[2%] left-0 block min-w-full z-0"
          height={600}
          width={600}
          src={"/shapes/7.svg"}
          alt="Shape seven"
        /> */}
            <Image
              className="absolute opacity-80  bottom-[0%] left-[50%] translate-x-[-50%] inline-block min-w-full z-0"
              height={600}
              width={600}
              src={"/shapes/8.svg"}
              alt="Shape eight"
            />
          </>
        ) : (
          <>
            <Image
              className="absolute right-0 top-[-10rem] max-h-screen block min-w-full z-0"
              height={600}
              width={600}
              src={"/shapes/1.svg"}
              alt="Shape one"
            />
            <Image
              className="absolute opacity-80  bottom-[0%] left-[50%] translate-x-[-50%] inline-block min-w-full z-0"
              height={600}
              width={600}
              src={"/shapes/8.svg"}
              alt="Shape eight"
            />
          </>
        )}

        {children}
      </GlobalProvider>
    </React.Fragment>
  );
};

export default Providers;
