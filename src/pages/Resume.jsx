import React from 'react'

export default function Resume() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Resume</h1>
      <p className="text-gray-600 mb-8">You can view or download my latest resume below.</p>

      <div className="space-x-4">
        <a
          href="/Sandhya_Resume.pdf"
          target="_blank"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📄 View Resume
        </a>

        <a
          href="/Sandhya_Resume.pdf"
          download
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </div>
  )
}

