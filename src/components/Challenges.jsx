import React from 'react'

export default function Challenges() {
  return (
    <div>
   <section id="challenges" className="px-4 py-12">
    <div className="max-w-6xl mx-auto">

     <div className="text-center">
    <p className="text-sm font-semibold text-gray-500">
     CHALLENGES
    </p>

    <h2 className="text-3xl font-bold mt-2">
     Build something real.
    </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

    <div className="border rounded-lg p-5">
    <p className="text-sm text-gray-500">FRONTEND DEVELOPMENT</p>
    <h3 className="text-xl font-semibold mt-2">Daily Notes</h3>
    <p className="text-gray-600 mt-2">
     Build a responsive notes application with React.
    </p>
    </div>

    <div className="border rounded-lg p-5">
    <p className="text-sm text-gray-500">JAVASCRIPT</p>
    <h3 className="text-xl font-semibold mt-2">Expense Tracker</h3>
    <p className="text-gray-600 mt-2">
    Create an application to track and manage daily expenses.
    </p>
    </div>

    <div className="border rounded-lg p-5">
  <p className="text-sm text-gray-500">UI / UX</p>
    <h3 className="text-xl font-semibold mt-2">Landing Page Redesign</h3>
    <p className="text-gray-600 mt-2">
    Redesign a real-world landing page with a better user experience.
   </p>
    </div>

     </div>
      </div>
    </section>


    </div>
  )
}
