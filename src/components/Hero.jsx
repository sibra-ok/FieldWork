import React from 'react'

export default function Hero({onStart}) {
  return (
    <div>
<section id='hero'>

<div className='flex flex-col md:flex-row justify-between
 items-start w-full gap-8 px-4 md:px-6'>

<div className='w-full md:w-1/2 p-4'>

<h2 className='text-black font-semibold my-4 text-sm 
md:text-lg'>
Practice for the real world.
</h2>

<h1 className='font-bold text-black my-3 text-3xl 
md:text-4xl leading-tight'>
You learned the skills. Now put them to the test
</h1>

<p className='mt-2 text-gray-700 font-sans max-w-xl 
leading-relaxed'>
Build realistic pojects, recieve useful feedback,
take on progressively harder challenges, and prepare
for the moment your skills meet the real world. 
</p>

<div className='flex flex-col md:flex-row gap-3'>
<button className='bg-blue-600 mr-3 my-3 border p-2
rounded-lg hover:bg-blue-900 text-white'
onClick={()=>onStart()}>
  Start Your Fieldwork
  </button>
<button className='bg-blue-600 mx-3 my-3 border p-2
rounded-lg hover:bg-blue-900 text-white'>
  See How It Works
  </button>
  </div>

</div>

<div className='shadow-md w-full md:w-1/2 justify-center mt-4 p-4'>

  <div className='max-w-xl flex flex-col 
  rounded-lg p-6 '>

<h2 className='font-semibold text-xl my-2 items-center'>FIELDWORK / CHALLENGE 01</h2>
<h1 className='font-bold text-2xl my-2'>Daily Notes</h1>
<h1 className='font-semibold text-xl mb-2'>FRONTEND DEVELOPMENT</h1>
<p className='text-black font-sans my-2 text-xl'>
  Build a productivity notes application
</p>
<p className='text-gray-700 font-sans mb-3 mx-w-xl leadng-relaxed'>
  Create a responsive notes application
  that allows users to create, edit, delete 
  and search their daily notes.
</p>

<div className='grid grid-cols-2 grid-rows-2 border-t p-3'>  
<div className='my-2'>
<h3 className='font-bold'>Deliverable</h3>
<span>Responsive Web Application</span>
</div>


<div>
<h3 className='font-bold'>Stack</h3>
<span>React, JavaScript</span>
</div>

<div className='mt-2'>
<h3 className='font-bold'>Duration</h3>
<span>03 DAYS</span>
</div> 

<div className='mt-2'>
<h3 className='font-bold'>Difficulty</h3>
<span>INTERMEDIATE</span>
</div>
</div>

<a href="#challenges">
<button className=' flex border bg-blue-600
 hover:bg-blue-900 p-2 my-2 rounded-lg m-auto text-white'>
  
  View Challenges
  </button>

</a>

  </div>
  </div>
</div>

</section>

    </div>
  )
}
