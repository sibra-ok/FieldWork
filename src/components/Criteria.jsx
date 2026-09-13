import React from 'react'

export default function Criteria() {
  return (
    <div>
<section id='criteria'>
    <div>
<h1 className=' my-4 font-bold text-3xl text-center'>
    How It Works
</h1>

<div className='grid grid-cols-1 md:grid-cols-2
lg:grid-cols-4 gap-6'>

<div className='flex flex-col gap-3 text-center 
p-4 border rounded-lg'>
<h3 className='font-semibold text-xl'>
    01 Choose a Challenge
</h3>
<p className='text-gray-700 font-sans'>
Select a domain, skill and challengethat matches your experience.
</p>
</div>
 
<div  className='flex flex-col gap-3 text-center 
p-4 border rounded-lg'>
<h3 className='font-semibold text-xl'>
    02 Build the Solution
</h3>
<p className='text-gray-700 font-sans'>
Solve a realistic problem, skill and challenge that matches your experience.
</p>
</div>

<div className='flex flex-col gap-3 text-center 
p-4 border rounded-lg'>
<h3 className='font-semibold text-xl'>
    03 Get Feedback
</h3>
<p className='text-gray-700 font-sans'>
Review what worked, what didn't and where you can improve.
</p>
</div>


<div className='flex flex-col gap-3 text-center 
p-4 border rounded-lg'>
<h3 className='font-semibold text-xl'>
    04 Take It Further
</h3>
<p className='text-gray-700 font-sans'>
Apply what you've learned to a header challenge and keep building your proof.
</p>
</div>


</div>
</div>

</section>

    </div>
  )
}
