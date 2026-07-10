import React from 'react'

export default function Experience() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Experience</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-purple-700">
            AI Intern — Parmy Technologies
          </h2>
          <p className="text-sm text-gray-600 mb-4">2021</p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Developed AI-based solutions using Python, TensorFlow, and Flask.</li>
            <li>Built a React dashboard to display real-time insights and improve data visualization.</li>
            <li>Worked on NLP classification models and improved prediction accuracy.</li>
            <li>Gained hands-on exposure to machine learning, backend APIs, and frontend integration.</li>
            <li>Prepared technical documentation and connected AI outputs to business use cases.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
