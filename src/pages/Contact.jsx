import React from 'react'

export default function Contact() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <img
        src="/profile.jpg"
        alt="Sandhya Chennoju"
        className="w-48 h-48 object-contain rounded-full mx-auto mb-6 shadow-xl transform hover:scale-105 transition duration-300"
      />

      <div className="text-lg space-y-3 text-gray-800">
        <p><span className="font-semibold text-black">Email:</span> chennoju.18@gmail.com</p>
        <p><span className="font-semibold text-black">Phone:</span> (980) 406-8079</p>
        <p>
          <span className="font-semibold text-black">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/chennoju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            linkedin.com/in/chennoju
          </a>
        </p>
      </div>
    </div>
  )
}

