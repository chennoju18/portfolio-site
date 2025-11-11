import React from 'react';

export default function Skills() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Skills & Tools</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">

        <div>
          <h2 className="text-xl font-semibold mb-2">🔍 Business Analysis</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Requirements Gathering</li>
            <li>BRD / FRD Documentation</li>
            <li>Gap Analysis, Use Cases</li>
            <li>Process Mapping (BPMN, UML)</li>
            <li>User Acceptance Testing (UAT)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">📊 Reporting & Modeling</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>SQL (Validation & Queries)</li>
            <li>Power BI, Tableau</li>
            <li>Data Modeling & KPIs</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🛠️ Tools & Platforms</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Jira, Azure DevOps, Confluence</li>
            <li>MS Visio, Lucidchart, Balsamiq</li>
            <li>ServiceNow</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">💻 Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Python (pandas, NumPy)</li>
            <li>Flask, Node.js, Express</li>
            <li>React.js, MongoDB</li>
            <li>HTML, CSS, Tailwind CSS</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🧠 AI & Automation</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>OCR, pytesseract</li>
            <li>Compromise.js (NLP)</li>
            <li>Automation Concepts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🚀 Deployment Tools</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Netlify (Portfolio, To-Do App)</li>
            <li>Render (Invoice Tracker backend)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

