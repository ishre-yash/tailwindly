import React from "react";
import Head from "next/head";

function pricing() {
  return (
    <div className="pricing-table-2 bg-gray-100 py-6 dark:bg-slate-900 md:py-12">
      <Head>
        <title>Tailwindly - Pricing</title>
        <meta
          name="description"
          content="Tailwindly is a powerful frontend library of tailwind components enhanced by vanilla js. It helps you build interfaces with advanced interactions and animations."
        />
      </Head>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-sky-500 md:mb-6 md:text-6xl">
            Buy once, use it forever.
          </h1>
        </div>

        <div className=" mt-6 md:mt-12 lg:-mx-4 lg:flex">
          <div className="my-4 md:my-6 lg:w-2/4">
            <div className="mx-auto max-w-sm rounded-lg border-t-4 border-solid border-white bg-white text-center transition-colors duration-300 hover:border-sky-600 dark:bg-slate-800">
              <div className="p-6 md:py-8">
                <h4 className="mb-2 text-2xl font-medium leading-tight">
                  Personal Use
                </h4>
                <p className="text-gray-500">
                  Open source components and templates
                </p>
              </div>
              <div className="pricing-amount bg-sky-100 p-6 transition-colors duration-300 dark:text-black">
                <div className="">
                  <span className="text-4xl font-semibold">$0</span> /year
                </div>
              </div>
              <div className="p-6">
                <ul className="leading-loose">
                  <li>For 1 developer</li>
                  <li>25+ Free HTML components</li>
                  <li>Community support</li>
                  <li>Lifetime access</li>
                  <li>Use on unlimited projects</li>
                </ul>
                <div className="mt-6 py-4">
                  <button className="rounded bg-sky-600 py-2 px-6 text-xl text-white transition-colors duration-300 hover:bg-sky-700">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 md:my-6 lg:w-2/4">
            <div className="mx-auto max-w-sm rounded-lg border-t-4 border-solid border-white bg-white text-center transition-colors duration-300 hover:border-sky-600 dark:bg-slate-800">
              <div className="p-6 md:py-8">
                <h4 className="mb-2 text-2xl font-medium leading-tight">
                  Professional
                </h4>
                <p className="text-gray-500">For large scale projects</p>
              </div>
              <div className="pricing-amount bg-sky-100 p-6 transition-colors duration-300 dark:text-black">
                <div>
                  <span className="text-4xl font-semibold">$29</span> /year
                </div>
              </div>
              <div className="p-6">
                <ul className="leading-loose">
                  <li>50+ HTML & React components</li>
                  <li>Premium support</li>
                  <li>Lifetime access</li>
                  <li>Use on unlimited projects</li>
                  <li>25+ templates</li>
                </ul>
                <div className="mt-6 py-4">
                  <button className="rounded bg-sky-600 py-2 px-6 text-xl text-white transition-colors duration-300 hover:bg-sky-700">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <h2 className="heading-letter-spacing text-center  text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-gray-50 md:w-8/12 md:text-5xl lg:text-6xl lg:leading-snug xl:w-1/2">
            <span className="text-sky-500">Frequently Asked</span> questions
          </h2>
        </div>

        <article className="mt-5 border-b border-gray-200 pb-7 dark:border-gray-800 lg:mt-10">
          <div className="flex w-full items-start justify-between sm:items-center">
            <h4 className="text-dark-600 text-base leading-relaxed dark:text-gray-400 md:text-[18px] lg:text-2xl">
              Who will benefit the most from Tailwindly ?
            </h4>
          </div>
          <p className="text-dark-600 mt-4 text-sm dark:text-gray-400 md:text-base lg:text-lg">
            Front-end developers Back-end developers who dislike developing UIs
            Agencies using Tailwind CSS Startups interested in rapid development
            Companies overhauling existing websites/apps People who want to make
            great UIs without spending a fortune
          </p>
        </article>
      </div>
    </div>
  );
}

export default pricing;
