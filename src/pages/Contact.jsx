import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Details</h1>

      <div className="max-w-2xl mx-auto space-y-6 text-center text-lg">
        <p>
          <span className="font-semibold text-gray-700">Email:</span><br />
          <a href="mailto:chennoju.sandhya18@gmail.com" className="text-blue-600 underline hover:text-blue-800">
            chennoju.sandhya18@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold text-gray-700">Phone:</span><br />
          +1 (980) 406-8079
        </p>

        <p>
          <span className="font-semibold text-gray-700">LinkedIn:</span><br />
          <a href="https://www.linkedin.com/in/chennoju" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
            linkedin.com/in/chennoju
          </a>
        </p>

        <p>
          <span className="font-semibold text-gray-700">Education:</span><br />
          Master of Science in Computer Science — Wright State University<br />
          Bachelor of Technology in Electrical & Electronics Engineering — Sri Indu College, India
        </p>
      </div>
    </div>
  )
}
