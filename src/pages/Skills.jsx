import React from 'react'

export default function Skills() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-10 text-center">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-700">
        
        {/* Frontend */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Frontend</h2>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>HTML5, CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Material UI, Bootstrap</li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-green-700">Backend</h2>
          <ul className="list-disc list-inside">
            <li>Node.js, Express.js</li>
            <li>Python (Flask, FastAPI)</li>
            <li>SMTP (email automation)</li>
          </ul>
        </div>

        {/* Programming Languages */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-purple-700">Languages</h2>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Databases */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">Databases</h2>
          <ul className="list-disc list-inside">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
          </ul>
        </div>

        {/* AI / Machine Learning */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-pink-700">AI / Machine Learning</h2>
          <ul className="list-disc list-inside">
            <li>NLP, BERT, LSTM</li>
            <li>Compromise.js, pytesseract</li>
            <li>TensorFlow, PyTorch</li>
            <li>OpenCV, CNNs, RNNs</li>
          </ul>
        </div>

        {/* Developer Tools */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-yellow-700">Developer Tools</h2>
          <ul className="list-disc list-inside">
            <li>VS Code</li>
            <li>Git, GitHub</li>
            <li>Vite, Netlify, Render</li>
            <li>Postman</li>
          </ul>
        </div>

        {/* Office Tools */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-red-700">Office / Productivity</h2>
          <ul className="list-disc list-inside">
            <li>Microsoft 365 (Word, PowerPoint, Excel)</li>
            <li>Google Docs</li>
            <li>Canva</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

