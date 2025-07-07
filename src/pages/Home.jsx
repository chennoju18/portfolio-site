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
      <h2 className="text-2xl mb-6 text-gray-700">Python Full-Stack Developer with AI Skills</h2>
      <p className="max-w-xl text-center text-gray-600">
        Passionate about building intelligent, user-friendly web applications with modern technologies.
        Combining full-stack engineering with AI/NLP to deliver impactful solutions.
      </p>
      <a
        href="/Sandhya_Resume.pdf"
        download
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
      >
        Download Resume
      </a>
    </div>
  )
}

