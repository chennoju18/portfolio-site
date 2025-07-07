import React from 'react'

export default function Projects() {
  return (
    <div className="p-8">
<h1 className="text-4xl font-bold mb-8 text-center">
  Projects
</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/todo.png" alt="To-Do App" className="w-full h-48 object-contain bg-gray-100" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Advanced To-Do List App</h2>
            <p className="text-gray-600 mb-4">
              A smart task manager with NLP-based suggestions, dark mode, and reminders.
            </p>
<a
  href="https://myadvancedtodoapp.netlify.app"
  target="_blank"
  className="inline-block mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
>
  🚀 Live Demo
</a>
<a
  href="https://github.com/chennoju18/AdvancedToDoApp-frontend"
  target="_blank"
  className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
>
  💻 GitHub
</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/invoice.png" alt="Invoice Tracker" className="w-full h-48 object-contain bg-gray-100" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Invoice Scanner + Payment Tracker</h2>
            <p className="text-gray-600 mb-4">
              OCR/NLP-powered invoice tracker with visual calendar and email reminders.
            </p>
<a
  href="https://myadvancedtodoapp.netlify.app"
  target="_blank"
  className="inline-block mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
>
  🚀 Live Demo
</a>
<a
  href="https://github.com/chennoju18/AdvancedToDoApp-frontend"
  target="_blank"
  className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
>
  💻 GitHub
</a>
          </div>
        </div>
      </div>
    </div>
  )
}

