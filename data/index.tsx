import { FaKaggle,FaGithub, FaLinkedin } from "react-icons/fa6";
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Listy",
      category:"web",
      des: "Explore the power of a task organizer designed for simplicity.",
      img: "/listy-banner.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fb.png"],
      link: "https://listyai.vercel.app/",
      caseLink:"/projects/listy",
    },
    {
      id: 2,
      title: "Bag of Popcorns ",
      category:"data-science",
      des: "Using sentiment analysis to uncover movie reviews as positive or negative",
      img: "/bagOfpopcorns.png",
      iconLists: [],
      link: "https://www.kaggle.com/code/azaharulislam/is392-sp23-c4/notebook",
      caseLink:"/projects/BagOfPopcorns",
    },
    {
      id: 3,
      title: "BellaBeat case Study",
      category:"data-analysis",
      des: "Analyzing bellabeat user behaviors to make marketing predictions",
      img: "/bellabeat.png",
      iconLists: [],
      link: "https://www.kaggle.com/code/azaharulislam/bellabeat#CONCLUSION",
      caseLink:"/listy",
    },
    {
      id: 4,
      title: "POS Reimagined",
      category:"mentored-projects",
      des: "Developed a POS system for enhancing business processes using Python Tkinter",
      img: "/POS1.png",
      iconLists: [],
      link: "https://codehs.com/sandbox/aislam2024/tech-pos-copy2-final",
      caseLink:"/projects/POS_CodeHS",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Teacher of Computer Science, Newark Board Of Education",
      desc: "Currently working to inspire students to code at Technology High School",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/nboe.png",
      link: "https://www.nps.k12.nj.us/tec/school-staff/faculty/",
    },
    {
      id: 2,
      title: "Research Assistant, SocialXLab",
      desc: "Worked to uncover User Needs for Metaverse Concert Attendees",
      className: "md:col-span-2",
      thumbnail: "/socialXlab.png",
      link: "https://socialinteractionlab.com/people/",
    },
    {
      id: 3,
      title: "Teacher Assistant, New Jersey Institute of Technology",
      desc: "Designed and developed courses for Intro to Web Development and Intro to empirical research under Dr. Osama Eljabiri ",
      className: "md:col-span-2", 
      thumbnail: "/njit.png",
      link: "https://people.njit.edu/profile/oe2",
    },
   
    {
      id: 4,
      title: "Project Manager, SPS",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/sps.png",
      link: "/",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      link: "https://github.com/azaharulislam171",
      icon: <FaGithub/>,
      
    },
    {
      id: 2,
      link: "https://linkedin.com/in/azaharulislam171",
      icon: <FaLinkedin/>,
      
    },
    {
      id: 3,
      link: "https://kaggle.com/azaharulislam",
      icon: <FaKaggle/>,
      
    },
  ];

  export const students2024 = [
    {
      id: 1,
      first_name: "Mikayla",
      last_name: "Long",
      portfolio: "https://sites.google.com/view/mikayla-long-cs-portfolio/home",
      intro: "Mikayla is a dedicated student with a passion for computer science, particularly in AI, game development, and research. She has excelled in developing complex projects, including 3D games, metaverse worlds, and public health research.",
      linkedin: "https://www.linkedin.com/in/mikayla-e-long"
    },

    {
      id: 2,
      first_name: "Kenny",
      last_name: "Bueso",
      portfolio: " https://sites.google.com/nps.k12.nj.us/kenny-buesos-portfolio/my-projects",  // Add Kenny's portfolio link if available
      intro: "Kenny is a leader who consistently demonstrates attention to detail and a strong focus on overcoming technical challenges. Proficient in Algebra, Calculus, and various programming languages, he excels in both technical and hands-on skills, showing up first to class and striving for excellence.",
      linkedin: ""  // Add Kenny's LinkedIn link if available
    },
    {
      id:3,
      first_name:"Mariana ",
      last_name:"Nolasco",
      portfolio: "https://sites.google.com/view/port-mariananolasco/home",  // Add Kenny's portfolio link if available
      intro: " As Mariana's teacher, I've been consistently impressed by her outstanding management skills and her ability to juggle multiple responsibilities with ease. Whether leading her peers in extracurricular activities or staying on top of her assignments, she consistently demonstrates a strong work ethic and a deep commitment to excellence. Her eagerness to learn and her attention to detail set her apart, making her a reliable and inspiring student who always goes above and beyond expectations.",
      linkedin: "" 
    }
    // Add more students here
  ];

  export const students2025 = [
    {
      id: 1,
      first_name: "Gabriel ",
      last_name: "Espinoza",
      portfolio: "https://sites.google.com/view/gabrieldjespinoza/home",
      intro: "Gabriel Espinoza is an exceptionally talented student whose natural affinity for programming sets him apart as one of the sharpest in the class. With an innate ability to grasp complex concepts and an unwavering focus on precision, Gabriel consistently takes on the most challenging projects, demonstrating both technical mastery and creative problem-solving. He is a regular candidate for the teacher of the day, often helping his peers understand difficult topics with clarity and patience. His determination and skills make it clear that Gabriel is destined for a high-achieving career in computer science, where his potential will undoubtedly lead to great success",
      linkedin: "https://www.linkedin.com/in/mikayla-e-long",
      img:"/2025_gabriel.jpg"
    },

    {
      id: 2,
      first_name: "Katleen",
      last_name: "Souza",
      portfolio: " https://sites.google.com/view/kettlen-student-portfolio/projects",  // Add Kenny's portfolio link if available
      intro: "If I am to describe three qualities that set Kettlen apart from others, those would be persistence, curiosity, and leadership. She has worked on numerous computer science projects under my guidance, and I have always been relieved when she took on a leadership role. She naturally inspires her peers by fostering collaboration and guiding them through technical and conceptual challenges. Kettlen's curiosity drives her to explore complex problems beyond the classroom, often engaging in extracurricular coding competitions and community tech workshops. Her persistence ensures that she not only sees her own projects through to completion but also motivates her peers to do the same.",
      linkedin: "",  // Add Kenny's LinkedIn link if available
      img:"/2025_kettlen.jpg"
    },
    {
      id:3,
      first_name:"Ramon ",
      last_name:"Parachio",
      portfolio: "https://sites.google.com/nps.k12.nj.us/ramonparachico/projects",  // Add Kenny's portfolio link if available
      intro: "Ramon Parachio is a highly skilled and self-driven student who has consistently excelled in advanced computer science projects. Notably, he developed a sophisticated restaurant management system using Python and Tkinter, showcasing his ability to integrate technical skills with real-world applications. Ramon has also mastered Git version control and GitHub, demonstrating proficiency in collaborative coding environments. His ability to work independently with minimal guidance is complemented by his capability to take on leadership roles, inspiring and guiding peers through complex challenges. Ramon’s technical expertise, resourcefulness, and leadership make him a standout student poised for success in his future endeavors.",
      linkedin: "" ,
      img:"/2025_ramon.jpg"
    },

    {
      id:4,
      first_name:"Jesus ",
      last_name:"Montolavo",
      portfolio: "https://profoextoic.netlify.app/",  // Add Kenny's portfolio link if available
      intro: "Jesus Montalvo is a remarkably talented and intuitive problem-solver whose work consistently reflects depth, originality, and technical excellence. While he tends to prefer working independently and brings a laid-back energy to the classroom, Jesus consistently delivers high-caliber results that speak for themselves. His ability to analyze and resolve complex coding challenges with precision and creativity sets him apart. Whether debugging intricate logic or engineering efficient algorithms, Jesus approaches each task with quiet confidence and sharp focus. Though not always the most punctual, his strong individual drive and exceptional problem-solving skills make him a standout coder whose work rivals that of professionals. Jesus is the kind of developer who thrives in environments where autonomy and technical innovation are valued—qualities that will no doubt serve him well in a successful future in computer science.",
      linkedin: "" ,
      img:"/2025_jesus.png"
    },

    {
      id:5,
      first_name:"Jairo ",
      last_name:"Vazquez",
      portfolio: "https://sites.google.com/view/jairos-porfolio/home",  // Add Kenny's portfolio link if available
      intro: "Jairo Vazquez is the kind of student every teacher hopes to have in class. Quiet yet confident, Jairo leads not with loud words, but with consistent actions. His positivity, punctuality, and sharp attention to detail set a high standard for his peers. Though he doesn’t speak much, his work always speaks volumes—well-organized, thoughtful, and thorough. Jairo is a natural leader who earns respect through reliability, focus, and integrity. It’s been a pleasure watching him grow, and there’s no doubt he has a bright future ahead.",
      linkedin: "" ,
      img:"/2025_jairo.png"
    }
    // Add more students here
  ];
  

  navItems