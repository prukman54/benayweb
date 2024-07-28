"use client";
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  text: string;
}

const SubItem = ({ text }: Props) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied]);

  return (
    <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
      <div className="bg-green-500 drop-shadow border-[3px] w-full overflow-hidden h-[2.5rem] border-white/80 border-dashed px-4 inline-flex items-center leading-[1.45] text-black clear-both font-medium whitespace-nowrap cursor-pointer relative">
        {text}
        <div className="absolute h-full px-4 uppercase bg-black text-white text-sm tracking-wide right-0 top-0 flex items-center">
          {copied ? "Copied 📑" : "copy"}
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default SubItem;
