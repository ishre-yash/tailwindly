import React from "react";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { BsCode } from "react-icons/bs";

function Hero() {
  return (
    <>
      <Head>
        <title>Tailwindly - Hero</title>
        <meta
          name="description"
          content="Tailwindly is a powerful frontend library of tailwind components enhanced by vanilla js. It helps you build interfaces with advanced interactions and animations."
        />
      </Head>
      <div className="overflow-hidden border-t  border-gray-200 bg-gray-50 dark:bg-gray-900"></div>
      <div className="mx-auto max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col">
          <h1 className="order-1 mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
            Hero Sections
          </h1>
          <nav className="flex items-center space-x-2 whitespace-nowrap text-sm font-medium text-gray-500">
            <Link href={"/"}>
              <a className="hover:text-gray-900">HOME</a>
            </Link>
            <svg
              width="24"
              height="24"
              fill="none"
              className="flex-none text-gray-300"
            >
              <path
                d="M10.75 8.75l3.5 3.25-3.5 3.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <Link href={"/"}>
              <a aria-current="page" className="truncate hover:text-gray-900">
                Page Components
              </a>
            </Link>
          </nav>
        </div>
        <div className="my-4 flex flex-none items-center">
          <div className="group flex space-x-4 rounded-lg bg-gray-100 p-1 hover:bg-gray-200">
            <button className="flex items-center justify-center rounded-lg border bg-white p-1.5 pr-4 font-semibold tracking-tighter">
              <AiOutlineEye className="mx-2 text-lg text-sky-500" />
              Preview
            </button>
            <button className="flex items-center justify-center rounded-lg p-1.5 pr-4 font-semibold tracking-tighter focus:bg-white">
              <BsCode className="mx-2 text-lg text-gray-500" />
              Code
            </button>
          </div>
        </div>
        <iframe
          src="https://ishre-yash.github.io/TextUtils-ShreYash/"
          className="h-[250px] w-full rounded-lg border border-sky-500 md:h-[500px]"
          title="TextUtils"
        ></iframe>
      </div>
    </>
  );
}

export default Hero;
