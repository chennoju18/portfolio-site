import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <img
        src="/profile.jpg"
        alt="Sandhya Chennoju"
        className="w-48 h-48 object-contain rounded-full mb-6 shadow-xl transform hover:scale-105 transition duration-300"
      />

      <h1 className="text-4xl font-bold mb-4">Sandhya Chennoju</h1>

      <h2 className="text-2xl mb-6 text-gray-700">
        Junior Frontend / Full-Stack Developer with AI Project Experience
      </h2>

      <p className="max-w-2xl text-gray-600 leading-relaxed">
        I am an entry-level developer with hands-on experience building responsive full-stack applications using React, Node.js, Flask, MongoDB, and Python. My projects combine frontend development, backend APIs, AI/NLP features, OCR automation, and real-world deployment using Netlify and Render. I am actively applying for junior frontend, full-stack, Python, and AI-integrated developer roles.
      </p>
    </div>
  )
}
