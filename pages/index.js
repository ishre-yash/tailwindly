import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-gray-100 font-sans antialiased dark:bg-gray-900 dark:text-gray-600 ">
      <Head>
        <title>Tailwindly - HOME</title>
        <meta
          name="description"
          content="Tailwindly is a powerful frontend library of tailwind components enhanced by vanilla js. It helps you build interfaces with advanced interactions and animations."
        />
      </Head>
      <main className="flex-auto ">
        <section className="container mx-auto">
          <div className="-mt-32 overflow-hidden pt-32  text-gray-900 dark:text-gray-300">
            <div className="max-w-container mx-auto px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-9 xl:pt-20">
              <div className="sm:mb-24 lg:flex xl:mb-32">
                <div className="relative z-10 mx-auto mb-12 flex max-w-screen-sm flex-none flex-col items-start sm:mb-16 lg:mx-0 lg:mb-0 lg:max-w-2xl lg:pt-10 lg:pr-20">
                  <div className="absolute -left-40 -top-40 -z-20 text-gray-200 dark:text-gray-800">
                    <svg
                      id="visual"
                      viewBox="0 0 900 900"
                      width="600"
                      height="600"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                    >
                      <g transform="translate(423.6017287294153 429.411998482734)">
                        <path
                          d="M164.8 -274.6C221 -253 278.9 -223.8 345.5 -176.7C412.1 -129.7 487.3 -64.8 476.3 -6.3C465.4 52.2 368.2 104.3 297.9 144.9C227.6 185.5 184.1 214.6 138.9 253C93.8 291.4 46.9 339.2 -6.9 351.1C-60.7 363.1 -121.3 339.2 -194.4 316.8C-267.4 294.5 -352.8 273.7 -394 221.2C-435.1 168.7 -432.1 84.3 -400.9 18C-369.7 -48.3 -310.4 -96.7 -267.6 -146.3C-224.8 -196 -198.4 -246.9 -156.5 -276.8C-114.7 -306.6 -57.3 -315.3 -1.5 -312.7C54.3 -310.1 108.7 -296.2 164.8 -274.6"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h1 className="order-1 mb-4 text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-5xl  sm:leading-none">
                    <span className="text-sky-400">
                      Beautiful UI components,
                    </span>{" "}
                    crafted with Tailwind CSS
                  </h1>

                  <p className="order-2 mb-8 leading-relaxed">
                    Over 50+ professionally designed, fully responsive.
                    <br />
                    Tailwindly is a powerful frontend library of tailwind
                    components enhanced by vanilla js. It helps you build
                    interfaces with advanced interactions and animations.
                  </p>
                  <div className="order-3 grid w-full grid-cols-1 gap-3 text-center sm:flex sm:gap-0 sm:space-x-6">
                    <a
                      href="#preview"
                      className="rounded-lg bg-white py-3 px-4 text-sm font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 "
                    >
                      Try it out
                    </a>
                    <Link href={"/"}>
                      <a className="rounded-lg bg-gray-900 py-3 px-4 text-sm font-semibold text-gray-300 hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                        All Components
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="relative mx-auto max-w-screen-sm lg:-ml-12 lg:mr-0 lg:max-w-none xl:-ml-6">
                  <img
                    src="https://svgsilh.com/svg/26432.svg"
                    className="absolute -right-10 -top-10 z-20 h-48 w-48 opacity-5"
                    alt="item"
                  />
                  <img src="/home/web.svg" alt="" />
                </div>
              </div>
              <div className="relative mx-auto mt-16 grid max-w-screen-sm gap-10 text-sm md:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <div className="group flex space-x-6 rounded-md border-2 border-gray-200 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-auto text-sky-500"
                    fill="currentColor"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.5,10.56l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,0-1.73l-9-5.2a1,1,0,0,0-1,0l-9,5.2a1,1,0,0,0,0,1.73ZM12,5.65l7,4-7,4.05L5,9.69Zm8.5,7.79L12,18.35,3.5,13.44a1,1,0,0,0-1.37.36,1,1,0,0,0,.37,1.37l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.37A1,1,0,0,0,20.5,13.44Z" />
                  </svg>
                  <div>
                    <h2 className="mb-2 font-semibold text-black dark:text-white">
                      50+ Examples
                    </h2>
                    <p className="leading-normal">
                      Beautifully designed, expertly crafted components that
                      follow all accessibility best practices and are easy to
                      customize.
                    </p>
                  </div>
                </div>
                <div className="group flex space-x-6 border-2 border-gray-200 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-auto text-sky-500"
                    fill="currentColor"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6,6A2,2,0,0,1,8,4,1,1,0,0,0,8,2,4,4,0,0,0,4,6V9a2,2,0,0,1-2,2,1,1,0,0,0,0,2,2,2,0,0,1,2,2v3a4,4,0,0,0,4,4,1,1,0,0,0,0-2,2,2,0,0,1-2-2V15a4,4,0,0,0-1.38-3A4,4,0,0,0,6,9Zm16,5a2,2,0,0,1-2-2V6a4,4,0,0,0-4-4,1,1,0,0,0,0,2,2,2,0,0,1,2,2V9a4,4,0,0,0,1.38,3A4,4,0,0,0,18,15v3a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4V15a2,2,0,0,1,2-2,1,1,0,0,0,0-2Z" />
                  </svg>
                  <div>
                    <h2 className="mb-2 font-semibold text-black dark:text-white">
                      <a href="/documentation#using-react">React, and HTML</a>
                    </h2>
                    <p className="leading-normal">
                      Accessible, interactive examples for React, plus vanilla
                      HTML if you’d rather write any necessary JS yourself.
                    </p>
                  </div>
                </div>
                <div className="group flex space-x-6 border-2 border-gray-200 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-auto text-sky-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.18,4h2.1a1,1,0,0,0,0-2H8.18a1,1,0,0,0,0,2ZM3,11.28a1,1,0,0,0,1-1V8.18a1,1,0,0,0-2,0v2.1A1,1,0,0,0,3,11.28ZM14.46,4a1,1,0,0,0,2,0V3a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2ZM21,7.54H16.46a1,1,0,1,0-2,0H8.54a1,1,0,0,0-1,1v5.92a1,1,0,1,0,0,2V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8.54A1,1,0,0,0,21,7.54ZM20,20H9.54V15.47h0V9.54H20ZM4,2H3A1,1,0,0,0,2,3V4A1,1,0,0,0,4,4,1,1,0,0,0,4,2ZM4,14.46a1,1,0,0,0-2,0v1a1,1,0,0,0,1,1H4a1,1,0,0,0,0-2Z" />
                  </svg>
                  <div>
                    <h2 className="mb-2 font-semibold text-black dark:text-white">
                      Fully Responsive
                    </h2>
                    <p className="leading-normal">
                      Every example is fully responsive and carefully designed
                      and implemented to look great at any screen size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 dark:bg-gray-800">
          <svg
            data-name="Layer 1"
            className="text-gray-100 dark:text-slate-900"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div
          className="container mx-auto space-y-8 bg-gray-50 px-4 pt-16 pb-24 dark:bg-gray-800 sm:px-6 lg:px-8"
          id="preview"
        >
          <section className="mx-au container divide-y divide-gray-200">
            <div className="pb-6 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                Free components
              </h2>
              <p className="mt-2 w-full flex-none text-sm text-gray-500 dark:text-gray-500">
                Start building your next project with an awesom components build
                with utilities
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-6 py-8 xl:grid-cols-4">
              <h3 className="col-span-3 font-semibold text-gray-900 dark:text-gray-100 xl:col-span-1">
                Components
              </h3>
              <div className="col-span-3 grid gap-6 sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3 lg:gap-x-8">
                <Link href={"/components/sections/hero"}>
                  <a className="group relative overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black ring-opacity-5 drop-shadow-sm hover:shadow-sky-500/75 dark:bg-gray-900">
                    <div className="relative overflow-hidden bg-gray-100 pt-[50%] dark:bg-gray-700">
                      <div className="absolute inset-0 h-full w-full overflow-hidden rounded-t-lg">
                        <img
                          src="/home/design.svg"
                          alt=""
                          className="absolute inset-0 h-full w-full"
                        />
                      </div>
                    </div>
                    <div className="py-3 px-4">
                      <p className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                        Hero Sections
                      </p>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-200">
                        1 components
                      </p>
                    </div>
                  </a>
                </Link>

                {/* <a
                  href="/"
                  className="group relative overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black ring-opacity-5"
                >
                  <div className="relative overflow-hidden bg-gray-100 pt-[50%]">
                    <div className="absolute inset-0 h-full w-full overflow-hidden rounded-t-lg">
                      <img
                        src="/img/category-thumbnails/marketing/pricing.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>
                  <div className="py-3 px-4">
                    <p className="mb-1 text-sm font-medium text-gray-900">
                      Pricing Sections
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      9 components
                    </p>
                    <p className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </a> */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
