"use client";
import React, { useEffect, useState } from "react";
import SubItem from "./SubItem";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  title: string;
  text?: string;
  array?: any;
}

const Item = ({ title, text, array }: Props) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied]);

  return (
    <div className="flex flex-col gap-1 mb-4">
      <h3 className="uppercase font-medium text-primary">{title}</h3>

      {text && (
        <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
          <div className="bg-green-500 drop-shadow border-[3px] w-full overflow-hidden h-[2.5rem] border-white/80 border-dashed px-4 inline-flex items-center leading-[1.45] text-black clear-both font-medium whitespace-nowrap cursor-pointer relative">
            {text}
            <div className="absolute h-full px-4 uppercase bg-black text-white text-sm tracking-wide right-0 top-0 flex items-center">
              {copied ? "Copied 📑" : "copy"}
            </div>
          </div>
        </CopyToClipboard>
      )}

      {array && (
        <div className="flex flex-col gap-4">
          {array.map((item: any, i: number) => (
            <SubItem key={i} text={item.text} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Item;
