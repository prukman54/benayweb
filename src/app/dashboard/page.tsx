import React from "react";
import Content from "./Content";
import getUserSession from "@/utils/getUserSession";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const {
    data: { session },
  } = await getUserSession();

  if (!session) {
    return redirect("/login");
  }

  const user = session.user;

  return (
    <div className="mb-[15rem] translate-y-[2.5rem] mx-[1.5rem] bg-white/10 rounded-[1.25rem] border border-white/20 px-[2.5rem] py-[1rem] md:px-[1.25rem]">
      <Content />
    </div>
  );
};

export default Dashboard;
