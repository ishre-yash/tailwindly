import React from 'react'

function docs() {
  return (<>
    <div className='relative flex w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='w-full flex-none lg:grid lg:grid-cols-3 lg:gap-8'>
      <div className='bg-gray-50 lg:bg-transparent -mx-4 sm:-mx-6 lg:mx-0 py-12 sm:py-16 px-4 sm:px-6 lg:pl-0 lg:pr-8'>
        <nav className='text-sm max-w-[37.5rem] mx-auto lg:max-w-none lg:mx-0 relative lg:sticky lg:top-10'>
          <ul className='space-y-3'>
            <li className='block border-l pl-4 -ml-px text-sky-500 border-current font-semibold text-lg dark:text-sky-400'>On this page</li>
            <li className='block border-l pl-4 -ml-px hover:text-sky-500 border-current font-medium hover:dark:text-sky-400'>Requirements</li>

          </ul>
        </nav>
      </div>
      <div className='relative col-span-2 lg:-ml-8 bg-white lg:shadow-md'>
        <div className='hidden lg:block absolute top-0 bottom-0 -right-4 w-8 bg-white'></div>
        <div className='relative py-16 lg:px-16'>
          <div className='prose prose-sm max-w-[37.5rem] mx-auto'>
          Getting set up
          <div className='text-lg font-bold'>Requirements</div>
All of the components in Tailwindly are designed for Tailwind CSS v3. To make sure that you are on the latest version of Tailwind, update via npm:
          </div>
        </div>
      </div>
    </div>
    </div>
  
  </>
  )
}

export default docs