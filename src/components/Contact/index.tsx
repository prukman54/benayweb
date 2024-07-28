import React from "react";
import SectionTitle from "@/components/SectionTitle";

const Contact = () => {
  return (
    <div id="contact">
      <div className="mb-[3.5rem]">
        <SectionTitle title="Drop <span>Message</span> For us." />
      </div>

      <form className="w-[60%] mx-auto">
        <div className="grid grid-cols-12 gap-x-[2.5rem] mb-[2rem]">
          <div className="col-span-6">
            <input
              className="py-5 leading-[1] px-6 bg-black/40 rounded-[.25rem] w-full placeholder:text-white/70 placeholder:font-medium placeholder:tracking-wide"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div className="col-span-6">
            <input
              className="py-5 leading-[1] px-6 bg-black/40 rounded-[.25rem] w-full placeholder:text-white/70 placeholder:font-medium placeholder:tracking-wide placeholder:capitalize"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        <input
          className="py-5 leading-[1] px-6 bg-black/40 rounded-[.25rem] w-full placeholder:text-white/70 placeholder:font-medium placeholder:tracking-wide mb-[2rem]"
          type="email"
          placeholder="Email"
        />

        <textarea
          className="py-5 leading-[1] px-6 bg-black/40 rounded-[.25rem] w-full placeholder:text-white/70 placeholder:font-medium placeholder:tracking-wide h-[18rem] resize-none"
          placeholder="Message"
        ></textarea>
      </form>
    </div>
  );
};

export default Contact;
