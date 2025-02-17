import React from "react";

export default function Syllabus() {
  return (
    <div className=" bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Advanced Programming for Info Technology 
        </h1>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Syllabus 2024-2025
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Instructor</h2>
          <p className="text-gray-600 mt-2">
            Azaharul Islam<br />
            <a href="mailto:aislam@nps.k12.nj.us" className="text-blue-500 hover:underline">
              aislam@nps.k12.nj.us
            </a>
            <br />
            Ext: 2797
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Course Design</h2>
          <p className="text-gray-600 mt-2">
            The course is designed to inspire high school students to explore how Artificial Intelligence works.
            Students will engage in labs incorporating statistics, Google Sheets, and Python.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Course Objectives</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>Understand and apply the main principles of DBMS</li>
            <li>Learn to code fluently in Python in a well-structured fashion with good style, clarity, and documentation</li>
            <li>Learn to use Python library packages and classes</li>
            <li>Select appropriate data structures to solve given problems</li>
            <li>Understand the difference between supervised and unsupervised learning</li>
            <li>Develop in-depth knowledge of parameter tuning</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Required Texts and Resources</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>
              <a
                href="https://codehs.com/uploads/66ee0baf6d4c2c004c70fbf5bee16ca7"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resource 1
              </a>
            </li>
            <li>
              <a
                href="https://codehs.com/uploads/c2e2a8ecece7a295c61ed070005b87f9"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resource 2
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Programming Environment</h2>
          <p className="text-gray-600 mt-2">
            <a
              href="https://codehs.com/explore/sandbox"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeHS Sandbox
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Units</h2>
          <div className="mt-4 space-y-6">
            {/* Example Unit */}
            <div className="p-4 border rounded-lg bg-white shadow">
              <h3 className="text-lg font-semibold text-gray-800">
                Unit 1: Getting Started with AI
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>1.1 What is Artificial Intelligence?</li>
                <li>1.2 Types of Artificial Intelligence</li>
                <li>1.3 The Ethics of Artificial Intelligence</li>
                <li>1.4 Exploring an Ethical Issue in AI</li>
              </ul>
              <p className="text-gray-600 mt-2">14 classes</p>
              <p className="text-gray-600">Assessments: MCQ Progress Checks, FRQ-1</p>
            </div>
            <div className="p-4 border rounded-lg bg-white shadow">
              <h3 className="text-lg font-semibold text-gray-800">
                Unit 1: Getting Started with AI
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>1.1 What is Artificial Intelligence?</li>
                <li>1.2 Types of Artificial Intelligence</li>
                <li>1.3 The Ethics of Artificial Intelligence</li>
                <li>1.4 Exploring an Ethical Issue in AI</li>
              </ul>
              <p className="text-gray-600 mt-2">14 classes</p>
              <p className="text-gray-600">Assessments: MCQ Progress Checks, FRQ-1</p>
            </div>
            {/* Repeat similar blocks for other units */}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Course Policy</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>No cell phone usage. Place cell phones in book bags.</li>
            <li>One retake per assignment within two weeks, following tutoring and assignment completion.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">Grading Policy</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>MCQ Progress Checks</li>
            <li>Lab Exams</li>
            <li>FRQ</li>
            <li>Class Work</li>
            <li>Do Now</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
