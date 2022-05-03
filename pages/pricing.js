import React from 'react'

function pricing() {
  return (
    <div className="pricing-table-2 bg-gray-100 dark:bg-slate-900 py-6 md:py-12">
  <div className="container mx-auto px-4">

    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-sky-500 mb-4 md:mb-6">Buy once, use it forever.</h1>
    </div>

    <div className=" lg:flex lg:-mx-4 mt-6 md:mt-12">

      <div className="lg:w-2/4 my-4 md:my-6">
        <div className="rounded-lg border-t-4 border-solid border-white bg-white dark:bg-slate-800 text-center max-w-sm mx-auto hover:border-sky-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Personal Use</h4>
            <p className="text-gray-500">Open source components and templates</p>
          </div>
          <div className="pricing-amount bg-sky-100 dark:text-black p-6 transition-colors duration-300">
            <div className=""><span className="text-4xl font-semibold">$0</span> /year</div>
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
              <button className="bg-sky-600 text-xl text-white py-2 px-6 rounded hover:bg-sky-700 transition-colors duration-300">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-2/4 my-4 md:my-6">
        <div className="rounded-lg border-t-4 border-solid border-white bg-white dark:bg-slate-800 text-center max-w-sm mx-auto hover:border-sky-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Professional</h4>
            <p className="text-gray-500">For large scale projects</p>
          </div>
          <div className="pricing-amount bg-sky-100 dark:text-black p-6 transition-colors duration-300">
            <div><span className="text-4xl font-semibold">$29</span> /year</div>
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
              <button className="bg-sky-600 text-xl text-white py-2 px-6 rounded hover:bg-sky-700 transition-colors duration-300">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      

    </div>
    <div className="flex items-center justify-center mt-8">
      <h2 className="font-black lg:leading-snug  lg:text-6xl md:text-5xl text-3xl tracking-tight heading-letter-spacing text-center text-gray-900 dark:text-gray-50 uppercase xl:w-1/2 md:w-8/12"><span className="text-sky-500">Frequently Asked</span> questions</h2></div>

      <article className="mt-5 lg:mt-10 border-b border-gray-200 dark:border-gray-800 pb-7"><div className="flex items-start sm:items-center w-full justify-between">
        <h4 className="text-base md:text-[18px] lg:text-2xl leading-relaxed text-dark-600 dark:text-gray-400">Who will benefit the most from Tailwindly ?</h4>
        </div><p className="text-sm md:text-base lg:text-lg text-dark-600 dark:text-gray-400 mt-4">Front-end developers Back-end developers who dislike developing UIs Agencies using Tailwind CSS Startups interested in rapid development Companies overhauling existing websites/apps People who want to make great UIs without spending a fortune</p></article>

  </div>
</div>
  )
}

export default pricing