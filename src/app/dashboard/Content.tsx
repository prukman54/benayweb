import React from "react";
import AddUserForm from "./AddUserForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { columns } from "./columns";
import { DataTable } from "./DataTable";

const Content = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: usersData } = await supabase
    .from("users")
    .select("*, game_id(*)");

  return (
    <div className="grid grid-cols-12 gap-[1.5rem] min-h-screen">
      <div className="col-span-3 pr-[2.5rem] border-r border-white/10 md:col-span-12 md:pr-0 md:border-r-0 md:border-b md:hidden">
        <ul className="flex flex-col gap-4">
          <AddUserForm />

          <li className="bg-red-500 cursor-pointer h-[2.5rem] rounded-full text-sm flex items-center justify-center uppercase font-medium tracking-wide shadow-sm">
            logout
          </li>
        </ul>
      </div>
      <div className="col-span-9 md:col-span-12">
        <ul className="items-center gap-3 hidden md:flex">
          <AddUserForm btnClass="px-7" />

          <li className="px-7 bg-red-500 cursor-pointer h-[2.5rem] rounded-full text-sm flex items-center justify-center uppercase font-medium tracking-wide shadow-sm">
            logout
          </li>
        </ul>
        {usersData && usersData?.length > 0 ? (
          <DataTable columns={columns} data={usersData} />
        ) : (
          <>
            <span>no users found</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
