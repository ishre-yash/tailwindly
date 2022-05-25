import { React, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { BsCode } from "react-icons/bs";

function Hero() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Head>
        <title>Tailwindly - Hero</title>
        <meta
          name="description"
          content="Tailwindly is a powerful frontend library of tailwind components enhanced by vanilla js. It helps you build interfaces with advanced interactions and animations."
        />
      </Head>
      <div className="mx-auto max-w-[85rem] bg-gray-50 px-4 py-20 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col">
          <h1 className="order-1 mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
            Hero Sections
          </h1>
          <nav className="flex items-center space-x-2 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-300">
            <Link href={"/"}>
              <a className="hover:text-gray-900 dark:hover:text-gray-200">
                HOME
              </a>
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
              <a
                aria-current="page"
                className="truncate hover:text-gray-900 dark:hover:text-gray-200"
              >
                Page Components
              </a>
            </Link>
          </nav>
        </div>
        <div className="my-4 flex flex-none items-center">
          <div
            onClick={() => setShow(!show)}
            className="group flex space-x-4 rounded-lg bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700"
          >
            <button className="flex items-center justify-center rounded-lg bg-white p-1.5 pr-4 font-semibold tracking-tighter dark:bg-black">
              <AiOutlineEye className="mx-2 text-lg text-sky-500" />
              Preview
            </button>
            <button
              onClick={() => setShow(!show)}
              className="flex items-center justify-center rounded-lg p-1.5 pr-4 font-semibold tracking-tighter focus:bg-white dark:focus:bg-black"
            >
              <BsCode className="mx-2 text-lg text-gray-500" />
              Code
            </button>
          </div>
        </div>

        {show ? (
          <iframe
            src="https://ishre-yash.github.io/TextUtils-ShreYash/"
            className="h-[250px] w-full rounded-lg border border-sky-500 md:h-[500px]"
            title="TextUtils"
          ></iframe>
        ) : (
          <div className="h-[250px] w-full overflow-auto rounded-lg border border-gray-900  md:h-[500px]">
            <pre>
              <code className="language-html scrolling-touch inline-block p-4 subpixel-antialiased">
                {`<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block">readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>`}
              </code>
            </pre>
          </div>
        )}
      </div>
    </>
  );
}

export default Hero;
