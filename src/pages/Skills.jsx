import React from 'react'

export default function Skills() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Frontend Development</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React.js</li>
            <li>JavaScript ES6+</li>
            <li>HTML5, CSS3</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap, Material UI</li>
            <li>Responsive UI Design</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-green-700">Backend Development</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Flask</li>
            <li>FastAPI</li>
            <li>REST API Integration</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-purple-700">Databases</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
            <li>SQL Basics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-pink-700">AI / ML Exposure</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>NLP</li>
            <li>BERT, LSTM</li>
            <li>TensorFlow, PyTorch</li>
            <li>OpenCV</li>
            <li>PyTesseract / OCR</li>
            <li>Compromise.js</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-yellow-700">Developer Tools</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Git, GitHub</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>Terminal</li>
            <li>Vite</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-red-700">Deployment & Productivity</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Netlify</li>
            <li>Render</li>
            <li>Microsoft Word, PowerPoint, Excel</li>
            <li>Canva</li>
            <li>Google Docs</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
