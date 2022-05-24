import React from "react";
import Head from "next/head";

function docs() {
  hljs.registerLanguage("bash", bash);
  return (
    <>
      <Head>
        <title>Tailwindly - Docs</title>
        <meta
          name="description"
          content="Tailwindly is a powerful frontend library of tailwind components enhanced by vanilla js. It helps you build interfaces with advanced interactions and animations."
        />
        s
      </Head>
      <div className="max-w-container relative mx-auto flex w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-none lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="-mx-4 bg-gray-50 py-12 px-4 sm:-mx-6 sm:py-16 sm:px-6 lg:mx-0 lg:bg-transparent lg:pl-0 lg:pr-8">
            <nav className="relative mx-auto max-w-[37.5rem] text-sm lg:sticky lg:top-10 lg:mx-0 lg:max-w-none">
              <ul className="space-y-3">
                <li className="-ml-px block border-l border-current pl-4 text-lg font-semibold text-sky-500 dark:text-sky-400">
                  On this page
                </li>
                <li className="-ml-px block border-l border-current pl-4 font-medium hover:text-sky-500 hover:dark:text-sky-400">
                  Requirements
                </li>
              </ul>
            </nav>
          </div>
          <div className="relative col-span-3 bg-white lg:-ml-8 lg:shadow-md">
            <div className="absolute top-0 bottom-0 -right-4 hidden w-8 bg-white dark:bg-slate-800 lg:block"></div>
            <div className="relative py-16 text-gray-700 antialiased dark:bg-slate-800 dark:text-gray-200 lg:px-16">
              <div className="mx-auto  max-w-[37.5rem]">
                <div className="mb-4 text-xl font-bold">Requirements</div>
                <p>
                  All of the components in Tailwindly are designed for Tailwind
                  CSS v3. To make sure that you are on the latest version of
                  Tailwind, update via npm:
                </p>

                <pre className="bash my-4">
                  <code className="bash">npm install tailwindcss@latest</code>
                </pre>
                <p className="my-2">
                  All of the examples in Tailwind UI rely on the default
                  Tailwind CSS configuration, but some rely on additional
                  first-party plugins like <code>@tailwindcss/forms</code>,{" "}
                  <code>@tailwindcss/typography</code>, and{" "}
                  <code>@tailwindcss/aspect-ratio</code>.
                </p>
                <p className="my-2">
                  When an example requires any plugins or configuration changes,
                  it will be noted in a comment at the top of the example.
                </p>
                <p className="my-2">
                  If you&apos;re new to Tailwind CSS, you&apos; ll want to{" "}
                  <a
                    className="font-semibold text-sky-500"
                    href="https://tailwindcss.com/docs"
                  >
                    read the Tailwind CSS documentation
                  </a>{" "}
                  as well to get the most out of Tailwind UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default docs;
