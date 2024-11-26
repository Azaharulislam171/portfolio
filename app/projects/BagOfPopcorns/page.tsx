'use client'
import RandomMotionBox from "@/app/components/RandomMotionBox";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
     <RandomMotionBox /> 
     <main className="mx-5 md:mx-32 mt-5">
      {/* FloatingNav or other components can be added here */}
      
      <div>
       
        <p className="text-sm">
          Data Science{" "}
          <span className="dark:text-indigo-600 text-blue-600 align-text-top">
            .
          </span>
        </p>
        <h1 className="text-5xl md:text-7xl md:py-20 font-bold py-10">
          Bag of Words Meets Bag of Popcorns
        </h1>
        <div className="flex justify-between">
          <p className="text-black-50 md:w-1/3 text-md font-serif">
            This Kaggle project focuses on performing sentiment analysis on movie
            reviews using the Bag of Words model. The objective is to classify the
            reviews as positive or negative. I implemented various Natural Language
            Processing (NLP) techniques, including tokenization, vectorization, and
            used machine learning models like Random Forest for classification.
          </p>
          
          <Link href="https://www.kaggle.com/code/azaharulislam/is392-sp23-c4/notebook" passHref>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                View Kaggle Notebook
              </span>
            </button>
          </Link>
        </div>
        <p className="dark:text-indigo-400 text-blue-600 text-sm pt-2 text-right pl-4">
          Tech Stack: Python, Scikit-learn, Natural Language Processing
        </p>
      </div>

      <div className="flex items-center justify-center pt-8">
        <Image
          src="/ListyBanner.png"  // Ensure the image is placed in the 'public' folder
          width={12000}
          height={500}
          alt="Kaggle Project Banner"
        />
      </div>
    </main>
    </>
   
  );
}
