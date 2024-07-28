import React from "react";
import Card from "./Card";
import SectionTitle from "../SectionTitle";

export interface CashTagItem {
  image: string;
  title: string;
  text: string;
}

const CASHTAGS: CashTagItem[] = [
  {
    image: "/images/cashtag-1.jpeg",
    title: "$HollyMTrautwein",
    text: "Is my new Cashtag for a deposit, it will appear as Holly M Trautwein on cashapp for deposit dear, please do not write anything in the remarks, please🙏🥺",
  },
  {
    image: "/images/cashtag-2.jpeg",
    title: "$HollyMTrautwein",
    text: "Is my new Cashtag for a deposit, it will appear as Holly M Trautwein on cashapp for deposit dear, please do not write anything in the remarks, please🙏🥺",
  },
  {
    image: "/images/cashtag-3.jpeg",
    title: "$HollyMTrautwein",
    text: "Is my new Cashtag for a deposit, it will appear as Holly M Trautwein on cashapp for deposit dear, please do not write anything in the remarks, please🙏🥺",
  },
];

const Cashtag = () => {
  return (
    <div id="cashtag" className="w-[90%] mx-auto mb-section mt-section">
      <div className="mb-[3.5rem]">
        <SectionTitle
          title="Trusted <span>cashtag</span> Dealer"
          text="lorLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit.em"
        />
      </div>

      <div className="grid grid-cols-12 gap-[2.5rem] md:gap-0 md:gap-y-[2.5rem]">
        {CASHTAGS.map((item, i) => (
          <div className="col-span-4 md:col-span-12" key={i}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cashtag;
