import React, { useState } from 'react'

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is FIELDWORK?',
      answer: 'FIELDWORK is a practical learning platform where you build realistic projects, receive feedback, and prepare for real-world development.'
    },
    {
      question: 'Who is FIELDWORK for?',
      answer: 'FIELDWORK is designed for students, career switchers, and self-taught developers who want more practical experience.'
    },
    {
      question: 'Do I need professional experience?',
      answer: 'No. You can start with challenges that match your current skill level and progress from there.'
    },
    {
      question: 'What kind of challenges are available?',
      answer: 'Challenges cover areas such as frontend development, web applications, technical assessments, and interview preparation.'
    },
    {
      question: 'Can I use my completed projects in my portfolio?',
      answer: 'Yes. Completed projects can become tangible proof of the skills you have developed and the work you can build.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-4 py-16" id="faq">
      <div className="max-w-3xl mx-auto">

    <div className="text-center">
    <p className="text-sm font-semibold text-gray-500">
     FAQ
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mt-3">
     Questions, answered.
     </h2>
    </div>

    <div className="mt-10 space-y-4">

    {faqs.map((faq, index) => (
    <div
    key={faq.question}
    className="border border-gray-200 rounded-lg p-5">

    <button
    onClick={() => toggleFAQ(index)}
    className="w-full flex justify-between items-center text-left font-semibold">
    {faq.question}

    <span>
    {openIndex === index ? '−' : '+'}
    </span>
    </button>

     {openIndex === index && (
     <p className="mt-3 text-gray-600">
     {faq.answer}
     </p>
     )}

    </div>
    ))}

   </div>
   </div>
    </section>
  )
}