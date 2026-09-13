import React from 'react'

export default function About() {
  return (
<section className="px-4 py-16">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

   <div className="border border-gray-200 rounded-lg p-8">
   <p className="text-sm font-semibold text-gray-500">
      THE FIELDWORK LOOP
   </p>

     <div className="mt-6 space-y-5">
     <div>
    <h3 className="font-semibold">01 — Choose</h3>
    <p className="text-gray-600 mt-1">
     Pick a domain and challenge that matches your current level
    </p>
    </div>

    <div>
    <h3 className="font-semibold">02 — Build</h3>
    <p className="text-gray-600 mt-1">
    Work through a realistic problem and create the solution yourself.
    </p>
    </div>

    <div>
    <h3 className="font-semibold">03 — Improve</h3>
    <p className="text-gray-600 mt-1">
    Receive feedback and understand what to fix or strengthen.
    </p>
    </div>

    <div>
    <h3 className="font-semibold">04 — Advance</h3>
    <p className="text-gray-600 mt-1">
    Take on progressively harder challenges as your skills grow.
     </p>
    </div>
     </div>
    </div>

        
    <div>
    <p className="text-sm font-semibold text-gray-500">
     PRACTICE, NOT JUST THEORY
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mt-3">
     Learn less by watching. Learn more by doing.
    </h2>

     <p className="mt-5 text-gray-600 leading-relaxed">
     FIELDWORK turns what you know into practical experience.
     Choose a challenge, build the solution, get meaningful feedback,
     and use what you learn to take on something harder.
    </p>
    </div>

      </div>
    </section>
  )
}