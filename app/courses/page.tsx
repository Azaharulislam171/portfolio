import React from 'react'
import Image from 'next/image'
import { MainNavbar } from '../components/MainNavbar'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <MainNavbar/>
    <div className='mx-auto text-xs md:text-sm'>
    <div className="flex flex-col md:flex-row transition-all duration-300 border-gray-200  border-2 m-2 rounded-xl py-2">
      {/* Box 1 */}
      <div className=" flex justify-center items-center p-4 md:w-1/3 ">
       <Image
       src='/advanced.png'
       height={315}
       width={312}
       alt="pic"
       />
      </div>
      
      <div className=" p-4 md:w-2/3 flex flex-col ">
          {/* Text Component */}
          <div>
            <h2 className=" py-2 text-xl font-bold">Advanced Program for IT </h2>
            <p>The Advanced Programming for IT course is designed to provide students with a comprehensive understanding of modern programming concepts, tools, and techniques, equipping them to solve complex problems in data science, artificial intelligence (AI), and advanced software development. The curriculum begins with an exploration of Artificial Intelligence, introducing its types, ethical considerations, and practical implications in various industries. Students will engage in critical discussions and projects to analyze ethical challenges in AI applications.

The course then delves into data management, focusing on how large companies store and process data. Topics include Big Data, types of databases, and foundational SQL skills such as table creation and advanced operations like joins. Students will also compare Python and R programming languages, master Python fundamentals, and work with data structures, conditionals, and loops.

Building on this, statistical concepts such as mean, variance, and regression analysis are integrated with data visualization techniques, enabling students to extract insights from data. Advanced modules cover AI in gaming, including search trees and minimax algorithms, and the development of chatbots and image prediction models using TensorFlow. By the course’s end, students will complete hands-on projects like sentiment analysis and text generation, preparing them for real-world challenges in IT and AI.
</p>
          </div>
          
          {/* Button Component */}
          <div className="flex justify-end mt-4">
              <Link 
                href="https://docs.google.com/document/d/1i-xTx2uOWOddPUvRvKrYfMEA9q4dxXk1/edit?usp=sharing&ouid=117625984245074625853&rtpof=true&sd=true" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    View Syllabus
                  </span>
                </button>
              </Link>
          </div>

          
          {/* Image Component */}
          <div className="flex flex-wrap justify-start mt-4">

          <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8 '>SQL</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8 '>Python</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Python Tkinter</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Google Sheets</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Excel</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Figma</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Data Analysis</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Regression Analysis</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8 '>NLP</h2>
          </div>
          
        </div>
    </div>
    <div className="flex flex-col md:flex-row transition-all duration-300 border-gray-200  border-2 m-2 rounded-xl py-2">
      {/* Box 1 */}
      <div className=" flex justify-center items-center p-4 md:w-1/3">
       <Image
       src='/ap-csa.png'
       height={315}
       width={312}
       alt="pic"
       />
      </div>
      
      <div className=" p-4 md:w-2/3 flex flex-col ">
          {/* Text Component */}
          <div>
            <h2 className=" py-2 text-xl font-bold">AP Computer Science A</h2>
            <p>The AP Computer Science A course is designed to equip high school students with a robust understanding of Java programming, with a primary focus on Object-Oriented Programming (OOP). Core concepts such as encapsulation, inheritance, and polymorphism form the foundation of the curriculum, enabling students to write modular, efficient, and maintainable code. Arrays are introduced as an essential building block for understanding data structures and algorithms, with practical applications in tasks like sorting and searching to develop problem-solving skills.

To enhance engagement, the course transitions from text-based programming to creating interactive applications using Java libraries like Swing or JavaFX. This hands-on approach allows students to design Graphical User Interfaces (GUIs), bridging the gap between abstract programming concepts and their real-world applications. Collaborative projects and real-world scenarios further reinforce the learning experience, fostering creativity and teamwork.

By emphasizing practical applications, structured learning, and interactive problem-solving, the AP Computer Science A course aims to inspire a passion for technology while equipping students with the skills necessary for academic and professional success. Whether pursuing further studies in computer science or applying their knowledge in innovative fields, students leave the course prepared to tackle challenges with confidence and creativity.
</p>
          </div>
          
          {/* Button Component */}
          <div className="flex justify-end mt-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        View Syllabus
        </span>
      </button>
          </div>
          
          {/* Image Component */}
          <div className="flex flex-wrap justify-start mt-4 ">
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8 '>Conditionals & Looping</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8 '>Data Structures</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Object Oriented Programming</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Sorting Algorithms</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Encapsulation</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Recursion</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Polymorphism</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>JavaFX</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8 '>MVC</h2>
          
          </div>
          
        </div>
    </div>
    <div className="flex flex-col md:flex-row transition-all duration-300 border-gray-200  border-2 m-2 rounded-xl py-2">
      {/* Box 1 */}
      <div className=" flex justify-center items-center p-4 md:w-1/3">
       <Image
       src='/intro.png'
       height={315}
       width={312}
       alt="pic"
       />
      </div>
      
      <div className=" p-4 md:w-2/3 flex flex-col ">
          {/* Text Component */}
          <div>
            <h2 className=" py-2 text-xl font-bold">Introduction to Computer Science</h2>
            <p>The Introduction to Computer Science course provides high school students with a foundational understanding of technology and programming, combining logical reasoning with hands-on learning. The curriculum begins with numbering system conversions, including binary, hexadecimal, and octal, to help students understand how computers process and store data. These concepts lay the groundwork for analytical thinking and problem-solving.

Students start programming with block-based tools like Snap! or Scratch, offering an accessible and interactive introduction to key concepts such as variables, conditionals, and loops. As their skills develop, the course transitions to text-based programming with JavaScript, where students learn to create dynamic web content and gain insights into web development. Looping is emphasized as a powerful tool for automating tasks and solving complex problems.

Hands-on projects play a central role in the course, allowing students to design animations, develop games, and explore real-world applications. These activities not only reinforce technical skills but also encourage creativity, teamwork, and independent thinking. By moving from visual to text-based programming, students experience a gradual, supportive progression, building confidence and competence. The course aims to inspire curiosity about technology, foster a passion for computer science, and prepare students for future academic and professional opportunities in a digital-first world.</p></div>
         
          {/* Button Component */}
          <div className="flex justify-end mt-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        View Syllabus
        </span>
      </button>
          </div>
          
          {/* Image Component */}
          <div className="flex flex-wrap justify-start mt-4">
          <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8 '>Binary Conversion</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8 '>Octal Number System</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Hexadecimal Number System</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Python Turtle</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Snap! </h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Abstraction</h2>
            <h2 className='text-blue-400 dark:text-violet-400 rounded-full px-4 m-1 border-blue-400 dark:border-violet-400 border-l-8'>Javascript</h2>
          
          </div>
          
        </div>
    </div>
    </div>
    
    </>
    
  )
}

export default page
