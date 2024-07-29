"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import useSupabaseClient from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    const obj = {
      email,
      password,
    };

    const { error } = await supabase.auth.signInWithPassword(obj);

    if (error) {
      toast.error("Invalid email or password!");
      setLoading(false);
      return;
    }

    setEmail("");
    setPassword("");
    setLoading(false);
    toast.success("Logged In.");
    router.push("/dashboard");
  };

  return (
    <section className="bg-white/10 w-[60%] mx-auto my-section rounded-[1.5rem] md:w-[90%]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="capitalize text-center text-[1.25rem] font-[500] leading-[1.15] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text cursor-pointer">
          <Link href={"/"}>
            Sadie&apos;s Highlimit <br /> Gameroom
          </Link>
        </div>

        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-medium lowercase text-white/90 drop-shadow-sm first-letter:capitalize md:text-2xl">
              Sign in to your account
            </h1>
            <form
              onSubmit={loginHandler}
              className="space-y-5 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm capitalize text-white"
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm capitalize text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="py-4 w-full px-10 tracking-wide rounded-full text-white bg-gradient-to-r from-primary hover:bg-gradient-to-l hover:transition-all to-secondary bg-white/20 text-[.9rem] leading-[1] uppercase font-medium cursor-pointer duration-300"
              >
                {loading ? "loading..." : "Sign in"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
