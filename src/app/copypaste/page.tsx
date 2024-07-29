import React from "react";
import Item from "./Item";
import getUserSession from "@/utils/getUserSession";
import { IoIosArrowForward } from "react-icons/io";
import { redirect } from "next/navigation";

const BEFORE_CASHOUT_RULES = [
  {
    text: "👏🎉 Congratulations you really got real hot hands love 💞 just a moment please we're sending your winnings right over 🤗💗",
  },
  {
    text: "Can u please exit from game, I willl redeem your funds🥰❤️",
  },
  {
    text: "Can u provide me your cashtag please!😇",
  },
  {
    text: "Would u liek to offer Any tips this time love..?🌸",
  },
];

const AFTER_CASHOUT_RULES = [
  {
    text: "Congrats 🎉 love 💓 $ cashout completed 💥 You are shining, Sweetheart 💟! Congratulations on this! Continue to play responsibly. All the best! 🥳 😎",
  },
  {
    text: "As we provide you with a good service & instant class out, please refer more of your friends who play games online so that we can provide you with a big referral bonus 💖🤗",
  },
];

const RULES = [
  {
    text: "Hi dear, What's up? Are you interested in playing online games? Are u Tired of being ripped off. If so we are here for you with our 24/7 fast & legit service.😊❤️",
  },
  {
    text: "We offer FireKirin, Juwa, Gamevault, cash machine, Mafia & Milkiway $15 or more: $5 bonus. (50% first deposit bonus & 20% reload bonus) 100% legit Available 24/7 Lightning Fast💨 Response Instant Load & Payout Pop you want to give it a try, we provide a 50% bonus on the first deposit & 10% bonus on every deposit💰💰",
  },
  {
    text: "Today is a winning day: We have cashed out 1000+ and most of them have deposited 20+ and some of them 50+ 🙂 grab an opportunity today as you are our new player so I have informed you. The new account got huge potential 😎💲💲",
  },
  {
    text: "Hello mam. How are you? Would you like to play🎰 today? The games are hitting. I got a 20% bonus💰 for you. for wednesday only dear.",
  },
  {
    text: "Dear, JUWA hitting: I had 500 cashout💵 today. U can also win🎰today lots of our customers make a good amount today🥰❤. Here are the winners.",
  },
  {
    text: "Hello mam, how are you? Cma'am?",
  },
  {
    text: "Happy Hour is Active, 10% Match on your min deposit of 10$, new players will get 50% off as the first deposit match WiN BIG & GET ON WINNING STREAK.",
  },
  {
    text: "Dear, we got Juwa🎰, Gamevault & CasinoWonderland are available if you want to give it a try, we provide a 60% bonus on the first deposit & 20% bonus on every deposit.🌸",
  },
  {
    text: "We are offering you a bonus today as the game are hitting.",
  },
  {
    text: "Would you like to play today ma'am? We got a bonus for you as the game is hitting.",
  },
  {
    text: "I'm offering you a handsome bonus today 🙂❤️",
  },
  {
    text: "Hello dear, how are you? FireKirin and Juwa Hitting wanna play some games to win big?",
  },
  {
    text: "Hey, We are adding some exciting👅 online games. Would u like to give it a try😉? We will notify u after it is added. It may take 2/3 days. I Promise❤️ we will provide u with quick & pleasing service.💸",
  },
];

const CUSTOMER_NOT_RESPONDING = [
  {
    text: "Are you ready now ?😉",
  },
  {
    text: "Did you log in ?",
  },
  {
    text: "Are you able to log in ?🙂",
  },
  { text: "Here is the link to the games.😊" },
];

const FOLLOWUP_MESSAGES = [
  {
    text: "Hi, hope you are having a relaxing weekend! I know you have been busy lately, but I miss U.",
  },
  { text: "I've been reminiscing about our old adventures lately. " },
  { text: "And how are your Kids dear..? " },
  { text: "How is your work going dear..? " },
  { text: "Did u get a promotion on your job honey..?💵" },
  { text: "Wondering how's your little princess?" },
];

const COMMENTS_TO_SHARE = [
  {
    text: "Big shoutout to my favorite online casino Facebook page! @ ",
  },
  {
    text: "Your updates, promotions, and community engagement make my gaming experience truly exceptional",
  },
  {
    text: "Thanks for keeping us entertained and informed. You rock!",
  },
  {
    text: "Thanks for keeping the fun alive! ",
  },
  {
    text: "Your page is my go-to for exciting updates and great offers. Keep up the awesome work! @ ",
  },
];

const Copypase = async () => {
  const {
    data: { session },
  } = await getUserSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <div className="w-[90%] mx-auto my-section grid grid-cols-12 gap-[2.5rem] md:gap-0 md:gap-y-[5rem]">
      <div className="col-span-6 bg-black/10 p-[2rem] border border-white/10 rounded-[1.25rem] md:col-span-12">
        <Item
          title="Gamelist"
          text="Hello dear❤️, we got: - Juwa🎰 - Gamevault🕹 - FIREKIRIN🎲 -
            MILKYWAY🎱 - ORIONSTAR - River Sweepstakes - Cash Machine - Mafia⚔️
            WITH A 100% MATCH BONUS 💵💵 Would you like to play, as games are
            hitting.💸 - Which game would you like to play dear❤️🥰"
        />

        <Item
          title="send game link"
          text="Please downlaod using this official link dear🌸"
        />

        <Item
          title="send id and password"
          text="Here's your new login info for The Game sweetheart 😊. Id & Pass
            both same ="
        />

        <Item
          title="If customer Pause"
          text="let me know if any issue during login dear, I will guide u through😇"
        />

        <Item
          title="If the ID has been created but they aren't responding."
          array={CUSTOMER_NOT_RESPONDING}
        />

        <Item
          title="deposit & castag"
          text="$dPedraza52 Is my new Cashtag for a deposit, it will appear as Diana
            Pedraza on cashapp for deposit dear, please don't write anything in
            the remarks, please🙏🥺"
        />

        <Item
          title="if freeplay"
          text="Sorry love we're drier than the stack of hay today 🥹🥀 You can
            reffer someone and grab 100% referral bonus💯"
        />

        <Item
          title="after deposit received"
          text="✨Just a moment sweetheart 😊.. Adding to your account real quick
            🎯✨."
        />

        <Item
          title="Coins loaded message bonus(100%/20%)"
          text="It's loaded up with bonus dear 💖.Wishing you good luck and sending
            you positive energy.🤞☺️.Take it to the top 🔝🎯."
        />

        <Item
          title="Coins loaded message NO bonus"
          text="It's loaded up dear 💖.Wishing you good luck and sending you
            positive energy.🤞☺️.Take it to the top 🔝🎯."
        />

        <Item
          title="welcome"
          text="Always here for you sweetheart 💓. Make it to the top ASAP 🥳."
        />

        <Item
          title="cashout"
          text="This is our Cahsout Rules, please have a look at all the Rules, once
            dear😊😇"
        />

        <Item
          title="for follow-up messages👇🏻👇🏻👇🏻👇🏻"
          array={FOLLOWUP_MESSAGES}
        />

        <Item
          title="for comments to share in groups👇🏻👇🏻👇🏻👇🏻"
          array={COMMENTS_TO_SHARE}
        />
      </div>

      <div className="col-span-6 bg-black/10 p-[2rem] border border-white/10 rounded-[1.25rem] md:col-span-12">
        <ul className="text-[1.1rem] flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <IoIosArrowForward className="shrink-0" size={22} />
            Create instant Cid and set Nickname
          </li>

          <li className="flex items-center gap-2">
            <IoIosArrowForward className="shrink-0" size={22} />
            Provide referal bonus to the old player and mention new Cid in chat
            to avoid further problems
          </li>
        </ul>

        <div className="w-full h-[1px] bg-white/20 my-[2rem]"></div>

        <div className="flex flex-col gap-4">
          <h3 className="uppercase font-medium text-primary">very important</h3>
          <ul className="text-[1rem] flex flex-col gap-3 list-decimal list-inside">
            <li className="list-item">
              Page & Another account arne not Sadiee loafer
            </li>
            <li className="list-item">Use different types of message format</li>
            <li className="list-item">Be as personal as possibel</li>
            <li className="list-item">No Own Message</li>
            <li className="list-item">
              Only use preset Messages Before Cashout
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-white/20 my-[2rem]"></div>

        <Item title="Before cashout" array={BEFORE_CASHOUT_RULES} />

        <div className="w-full h-[1px] bg-white/20 my-[2rem]"></div>

        <Item title="After cashout" array={AFTER_CASHOUT_RULES} />

        <div className="w-full h-[1px] bg-white/20 my-[2rem]"></div>

        <Item title="rules" array={RULES} />
      </div>
    </div>
  );
};

export default Copypase;
