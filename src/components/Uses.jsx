import React from 'react'

export default function Uses() {
  return (
  <section className="px-4 py-16">
  <div className="max-w-6xl mx-auto">

  <div className="text-center">
   <p className="text-sm font-semibold text-gray-500">
    SOLUTIONS
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mt-3">
     Practice built around your goals.
    </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

     <div className="border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold">
     Students
    </h3>
    <p className="mt-3 text-gray-600">
    Turn coursework into practical experience by applying what
    you've learned to realistic projects.
    </p>
     </div>

    <div className="border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold">
    Career Switchers
    </h3>
     <p className="mt-3 text-gray-600">
     Build proof for your next opportunity through relevant
     projects that demonstrate your practical skills.
    </p>
    </div>
     <div className="border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold">
        Self-Taught Developers
    </h3>
    <p className="mt-3 text-gray-600">
        Find your strengths and gaps through structured projects,
        feedback, and realistic assessments.
    </p>
    </div>

    </div>
      </div>
    </section>
  )
}