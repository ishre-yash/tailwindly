import React from 'react'

function docs() {
  return (<>
    <div className='relative flex w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='w-full flex-none lg:grid lg:grid-cols-3 lg:gap-8'>
      <div className='bg-gray-50 lg:bg-transparent -mx-4 sm:-mx-6 lg:mx-0 py-12 sm:py-16 px-4 sm:px-6 lg:pl-0 lg:pr-8'>
        <nav className='text-sm max-w-[37.5rem] mx-auto lg:max-w-none lg:mx-0 relative lg:sticky lg:top-10'>
          <ul className='space-y-3'>
            <li className='ml-4'>Getting set up</li>
            <li className='ml-4'>HELLO</li>

          </ul>
        </nav>
      </div>
      <div className='relative col-span-2 lg:-ml-8 bg-white lg:shadow-md'>
        <div className='hidden lg:block absolute top-0 bottom-0 -right-4 w-8 bg-white'></div>
        <div className='relative py-16 lg:px-16'>
          <div className='prose prose-sm max-w-[37.5rem] mx-auto'>
          Getting set up
          </div>
        </div>
      </div>
    </div>
    </div>
  
  </>
  )
}

export default docs