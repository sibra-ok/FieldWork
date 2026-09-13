import React from 'react'

export default function Pricing({onStart}) {
  return (
    <section className="px-4 py-16" id="pricing">
    <div className="max-w-6xl mx-auto">

   <div className="text-center">
    <p className="text-sm font-semibold text-gray-500">
      PRICING
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mt-3">
     Choose how you want to practice.
    </h2>

    <p className="mt-3 text-gray-600">
     Start small, build consistently, and go further when you're ready.
    </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

     <div className="border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold">Starter</h3>
    <p className="mt-3 text-gray-600">
    For getting started with practical projects.
    </p>
    
    <p className="text-3xl font-bold mt-6">Free</p>
    <button className="w-full border border-gray-300 rounded-lg py-2 mt-6"
    onClick={()=>onStart()}>
    Start Practicing
    </button>
    </div>

    <div className="border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold">Pro</h3>
    <p className="mt-3 text-gray-600">
     For consistent practice and detailed feedback.
    </p>
    
    <p className="text-3xl font-bold mt-6">Rs.499<span className="text-sm font-normal">
    /month
    </span></p>
    <button className="w-full bg-black text-white rounded-lg py-2 mt-6"
    onClick={()=>onStart()}>
    Start Fieldwork
    </button>
    </div>

    <div className="border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold">Career</h3>
     <p className="mt-3 text-gray-600">
     For deeper preparation with advanced challenges and assessments.
    </p>
    
    <p className="text-3xl font-bold mt-6">
    Rs.899
    <span className="text-sm font-normal">/month</span></p>
    <button className="w-full border border-gray-300 rounded-lg py-2 mt-6"
    onClick={()=>onStart()}>
    Choose Career
    </button>
     </div>

    </div>
      </div>
    </section>
  )
}