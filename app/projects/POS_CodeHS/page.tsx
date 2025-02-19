'use client'
import Image from "next/image";
import Link from "next/link";
import { MainNavbar } from "@/app/components/MainNavbar";
import Bubble from "@/app/components/Bubble";
import FooterSmall from "@/app/components/FooterSmall";
import { CodeXmlIcon, FigmaIcon, FileIcon, Paperclip } from "lucide-react";

export default function Point_of_sale_1() {
  return (
    <>
      <MainNavbar />

      <div className="mx-5 md:mx-32 mt-8">
        <div>
          <p className="text-sm">
            Mentored Projects <span className="dark:text-indigo-600 text-blue-600 align-text-top">.</span>
          </p>
          <Bubble text="Point of Sales with Python Tkinter" />
          <div className="flex flex-col md:flex-row md:justify-between items-end">
            <p className="text-black-50 sm:w-full md:w-1/2 text-md font-serif">
              Our team of high school students has developed a versatile Point of Sale (POS) system designed to streamline retail operations. This user-friendly system integrates essential features, including product management, transaction processing, and inventory tracking, all through an intuitive interface. It is tailored to meet the needs of small businesses or retail environments looking for a cost-effective, easy-to-use solution.
              The POS system enables businesses to manage sales, update inventory, process payments, and generate receipts seamlessly. With both admin and customer-facing interfaces, it allows for smooth operations across various retail settings. The system’s modular design also makes it adaptable to different business models, offering the flexibility needed to grow and evolve with changing business needs.
            </p>
            <div className="flex flex-row md:flex-col gap-1 mt-4 md:mt-0">
              <Link href="https://www.figma.com/design/zSLLsyriWJWkVPjmGvrM9C/TechPOS-(Copy)-(Copy)?node-id=0-1&t=DgBpuRH0YGNfdIdk-1">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Paperclip className="h-4 w-4 mr-2" />
                    Figma Design File
                  </span>
                </button>
              </Link>

              <Link href="https://docs.google.com/document/d/1DrvxVu5UI-13nD9cNHrBulmjErHrLUIKhsvLs0C47Lw/edit?usp=sharing">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <FileIcon className="h-4 w-4 mr-2" />
                    Project Documentation
                  </span>
                </button>
              </Link>

              <Link href="https://codehs.com/sandbox/kettlen617993/tech-pos-copy2-final?collaborate=-OC9H2Q8DUJkzeZVypcM">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Live Website
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <p className="dark:text-indigo-400 text-blue-600 text-sm pt-2 text-right pl-4">
            Tech Stack: Python Tkinter, MySQL
          </p>
        </div>
        <h3 className="text-xl md:text-4xl font-serif"> Contributors </h3>
        <div className="flex  justify-start gap-2 mt-8">
          <span className="bg-slate-950 dark:bg-slate-500 text-white rounded-lg p-2"><CodeXmlIcon className="w-4 h-4 "></CodeXmlIcon>    Dev- Gabriel Espinoza</span>
          <span className="bg-slate-950 dark:bg-slate-500 text-white rounded-lg p-2"><CodeXmlIcon className="w-4 h-4 "></CodeXmlIcon> Kettlen Souza Perera</span>
          <span className="bg-slate-950 dark:bg-slate-500 text-white rounded-lg p-2"><FigmaIcon className="w-4 h-4 "></FigmaIcon> Cristopher Dos Santos</span>
          <span className="bg-slate-950 dark:bg-slate-500 text-white rounded-lg p-2"><FigmaIcon className="w-4 h-4 "></FigmaIcon> Kelly Michelle Campos</span>
        </div>

        <div className="flex items-center justify-center pt-8">
          <Image
            src="/TechPOS1.png"
            width={12000}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div className="flex justify-end my-4">
          <Link href="/projects/BagOfPopcorns">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Bag of Popcorns DS Project
              </span>
            </button>
          </Link>
        </div>

        <FooterSmall />
      </div>
    </>
  );
}
