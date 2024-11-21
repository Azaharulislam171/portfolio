import React from 'react'
import { FloatingNavDemo } from '../components/navbar'

const Resume = () => {
  return (
    <>
      <FloatingNavDemo/>
     <div className="flex justify-center items-center ">
    <object
      data="/resume.pdf"  // Path to your PDF file in the public folder
      type="application/pdf"
      width="100%"
      height="1600px"
      className="border rounded shadow-lg"
    >
      <p className="text-center">
        Your browser does not support PDFs. Download the PDF to view it: 
        <a href="/resume.pdf" className="text-blue-500 underline">
          Download PDF
        </a>.
      </p>
    </object>
  </div>
    </>
   
  )
}

export default Resume