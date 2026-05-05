"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { loginAction } from "../marketplace/actions";

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex h-[56px] w-[434px] items-center justify-center rounded-[50px] border-0 bg-[#FE7F2D] text-[16px] font-semibold leading-[24px] text-[#F0F2F8] outline-none transition hover:bg-[#e96f21] disabled:opacity-70"
    >
      {pending ? "Loading..." : "Log In"}
    </button>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full overflow-x-auto bg-[#001529]">
      <section className="mx-auto flex h-[810px] w-[1440px] bg-[#001529]">
        {/* LEFT IMAGE */}
        <section
          className="h-[810px] w-[720px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/marketplace/login-photo.jpg')",
          }}
        />

        {/* RIGHT AREA */}
        <section className="flex h-[810px] w-[720px] flex-col items-center bg-[#002643] px-[24px] py-[80px]">
          {/* LOGO */}
          <Link
            href="/"
            className="mb-[63px] block h-[72px] w-[272px] text-center text-[60px] font-normal leading-[72px] tracking-[0.12em] text-[#F0F2F8] no-underline"
            style={{
              fontFamily:
                "var(--font-zilla), 'Zilla Slab Highlight', serif",
            }}
          >
            2ndTime
          </Link>

          {/* CARD */}
          <form
  action={loginAction}
  className="box-border flex min-h-[517px] w-[498px] flex-col items-center rounded-[20px] bg-[#F0F2F8] px-[32px] py-[32px]"
>
          
            {/* TITLE */}
            <h1 className="mb-[8px] whitespace-nowrap text-center text-[25px] font-semibold leading-[38px] text-[#FE7F2D]">
              Log In
            </h1>

            {/* DESCRIPTION */}
            <p className="mb-[12px] w-[434px] text-center text-[16px] font-normal leading-[24px] text-black">
              Log in with your username or email to
              <br />
              log into the website and access the features
            </p>

            {/* USERNAME */}
            <div className="mb-[12px] w-[434px]">
              <label
                htmlFor="email"
                className="mb-[8px] block text-[16px] font-normal leading-[24px] text-black"
              >
                Enter your username or email address
              </label>

              <input
                id="email"
                type="text"
                name="email"
                required
                placeholder="Username or email address"
                className="h-[53px] w-[434px] rounded-[10px] border border-[#2176B5] bg-[#F0F2F8] px-[16px] text-[13px] font-normal leading-[20px] text-[#08497A] outline-none placeholder:text-[#ABAFB3] focus:border-[#2176B5] focus:outline-none focus:ring-0"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-[12px] w-[434px]">
              <label
                htmlFor="password"
                className="mb-[8px] block text-[16px] font-normal leading-[24px] text-black"
              >
                Enter your password
              </label>

              <div className="flex h-[53px] w-[434px] items-center justify-between rounded-[10px] border border-[#2176B5] bg-[#F0F2F8] px-[16px]">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="h-[20px] flex-1 border-0 bg-transparent p-0 text-[13px] font-normal leading-[20px] text-[#08497A] outline-none placeholder:text-[#ABAFB3] focus:border-0 focus:outline-none focus:ring-0"
                />

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-[10px] shrink-0"
                >
                  <path
                    d="M3.333 3.333L16.667 16.667"
                    stroke="#546779"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.233 8.233A2.5 2.5 0 0 0 11.767 11.767"
                    stroke="#546779"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.117 6.117C3.892 7.225 2.5 10 2.5 10C2.5 10 5 15 10 15C11.375 15 12.558 14.625 13.55 14.067"
                    stroke="#546779"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.167 5.058C9.442 5.017 9.717 5 10 5C15 5 17.5 10 17.5 10C17.5 10 16.875 11.25 15.733 12.45"
                    stroke="#546779"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <Link
                href="/login"
                className="mt-[8px] block text-right text-[14px] font-normal leading-[21px] text-[#FE7F2D] no-underline"
              >
                Forgot Password
              </Link>
            </div>

            {/* BUTTON */}
            <div className="mb-[16px]">
              <LoginButton />
            </div>

            <p className="m-0 h-[24px] shrink-0 text-center text-[16px] font-normal leading-[24px] text-black">
  No Account?{" "}
  <Link
    href="/marketplace?login=success"
    className="text-[#2176B5] no-underline"
  >
    Sign Up
  </Link>
</p>
          
          </form>
        </section>
      </section>
    </main>
  );
}