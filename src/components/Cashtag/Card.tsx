"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CashTagItem } from ".";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const Card = ({ data }: { data: CashTagItem }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied]);

  return (
    <div className="relative w-full rounded-[1.5rem] p-[1.5rem] bg-white/10 cursor-pointer">
      <Image
        className="w-full h-auto aspect-square object-cover rounded-[1.25rem] mb-[1.5rem]"
        height={400}
        width={400}
        src={data.image}
        alt={data.title}
      />

      <h2 className="mb-[.5rem] text-[1.35rem] capitalize font-medium">
        {data.title}
      </h2>

      <p className="text-[1.1rem] text-white/70">{data.text}</p>

      <CopyToClipboard
        text={"cashtag details"}
        onCopy={() => {
          setCopied(true);
          toast.success("Cashtag Details Copied!");
        }}
      >
        <button className="mt-[2rem] py-4 px-8 tracking-wide rounded-full text-white bg-gradient-to-r from-primary hover:bg-gradient-to-l hover:transition-all to-secondary bg-white/20 text-[.8rem] leading-[1] uppercase font-medium cursor-pointer duration-300">
          {copied ? "copied 📑" : "copy details"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Card;
