import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <img
        src="/profile.jpg"
        alt="Sandhya Chennoju"
        className="w-48 h-48 object-contain rounded-full mb-6 shadow-xl transform hover:scale-105 transition duration-300"
      />
<h1 className="text-4xl font-bold mb-4">Sandhya Chennoju</h1>
<h2 className="text-2xl mb-6 text-gray-700">
  Business Analyst | Agile Strategist | AI-Aware Problem Solver | Cross-Functional Communicator
</h2>
<p className="max-w-xl text-center text-gray-600">
  Experienced Business Analyst with a strong background in Agile delivery, AI-driven solutions, and full-stack collaboration. Skilled in translating complex business needs into clear, actionable requirements that drive automation, reporting, and end-to-end digital transformation.
</p>
    </div>
  )
}

