import React from 'react'

export default function CTA({onClick}) {
  return (
<div>
<section className="px-4 py-16">
 <div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold">
 Ready to put your skills to the test?
</h2>

<p className="mt-4 text-gray-600">
 Stop preparing for the real world. Start practicing for it.
 </p>

<button className="bg-black text-white rounded-lg px-6 py-3 mt-6"
onClick={()=>onStart()}>
Start Fieldwork
</button>

</div>
</section>

 </div>
  )
}
