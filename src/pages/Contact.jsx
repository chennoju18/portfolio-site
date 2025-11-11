import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Details</h1>

      <div className="max-w-2xl mx-auto space-y-6 text-center">

        <p>
          <span className="font-semibold text-gray-700">📧 Email:</span><br />
          <a href="mailto:sandhyach.1018@gmail.com" className="text-blue-600 underline hover:text-blue-800">
            sandhyach.1018@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold text-gray-700">📞 Phone:</span><br />
          (513) 402-0465
        </p>

        <p>
          <span className="font-semibold text-gray-700">🔗 LinkedIn:</span><br />
          <a href="https://www.linkedin.com/in/chennoju18" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
            linkedin.com/in/chennoju18
          </a>
        </p>

        <p>
          <span className="font-semibold text-gray-700">🎓 Education:</span><br />
          Master of Science in Computer Science<br />
          Wright State University
        </p>

      </div>
    </div>
  );
}

