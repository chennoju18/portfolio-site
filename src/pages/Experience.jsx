import React from 'react';

export default function Experience() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Professional Experience</h1>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* Lanvit – India */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-700">Business Analyst – Lanvit, India</h2>
          <p className="text-sm text-gray-600 mb-2">Jan 2019 – Feb 2021</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Created BRDs/FRDs, UML diagrams, and dashboards for manufacturing & procurement systems.</li>
            <li>Enabled KPI visibility and improved supply-chain reporting using Power BI.</li>
            <li>Worked with developers to build and test backend data logic and reports.</li>
          </ul>
        </div>

        {/* Parmy Technologies – Internship */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-purple-700">AI Intern – Parmy Technologies</h2>
          <p className="text-sm text-gray-600 mb-2">Feb 2021 – May 2021</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Built ML models with Python to extract insights from structured business data.</li>
            <li>Mapped ML insights to business KPIs and documented use cases with clear traceability.</li>
            <li>Worked with mentors to identify automation opportunities in reporting workflows.</li>
          </ul>
        </div>

        {/* IT Pro Hub – USA */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-700">Business Analyst – IT Pro Hub, USA</h2>
          <p className="text-sm text-gray-600 mb-2">May 2022 – Present</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Facilitated stakeholder interviews, JAD sessions, and process mapping (UML/BPMN).</li>
            <li>Defined data transformation logic, SQL validations, and API specs with dev teams.</li>
            <li>Wrote user stories, acceptance criteria, and coordinated UAT under SAFe Agile.</li>
            <li>Acted as a bridge between business and AI/data teams for automation use cases.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

