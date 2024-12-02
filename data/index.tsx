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
      title: "Yoom - Video Conferencing App",
      category:"web",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
      caseLink:"/projects/BagOfPopcorns",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      category:"data-analysis",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
      caseLink:"/listy",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      category:"data-science",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
      caseLink:"/listy",
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
      thumbnail: "/exp3.svg",
    },
    {
      id: 2,
      title: "Research Assistant, SocialXLab",
      desc: "Worked to uncover User Needs for Metaverse Concert Attendees",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 3,
      title: "Teacher Assistant, New Jersey Institute of Technology",
      desc: "Designed and developed courses for Intro to Web Development ",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
   
    {
      id: 4,
      title: "Project Manager, SPS",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Azaharulislam171"
    },
    {
      id: 2,
      img: "/kaggle-brands-solid.svg",
      link: "https://www.kaggle.com/azaharulislam"

    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://linkedin.com/in/Azaharulislam171"

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
      portfolio: "https://sites.google.com/view/mikayla-long-cs-portfolio/home",
      intro: "Mikayla is a dedicated student with a passion for computer science, particularly in AI, game development, and research. She has excelled in developing complex projects, including 3D games, metaverse worlds, and public health research.",
      linkedin: "https://www.linkedin.com/in/mikayla-e-long",
      img:"/2025_gabriel.jpg"
    },

    {
      id: 2,
      first_name: "Katleen",
      last_name: "Souza",
      portfolio: " https://sites.google.com/nps.k12.nj.us/kenny-buesos-portfolio/my-projects",  // Add Kenny's portfolio link if available
      intro: "If I am to describe three qualities that set Kettlen apart from others, those would be persistence, curiosity, and leadership. She has worked on numerous computer science projects under my guidance, and I have always been relieved when she took on a leadership role. She naturally inspires her peers by fostering collaboration and guiding them through technical and conceptual challenges. Kettlen's curiosity drives her to explore complex problems beyond the classroom, often engaging in extracurricular coding competitions and community tech workshops. Her persistence ensures that she not only sees her own projects through to completion but also motivates her peers to do the same.In addition to her technical skills, Kettlen demonstrates a strong commitment to her school and local community. She has volunteered to mentor younger students in programming, helping them develop foundational skills while building their confidence. Her approach is always empathetic and patient, ensuring that others feel supported and valued.Kettlen’s character shines brightest in her ability to balance her personal achievements with a genuine desire to uplift others. Whether it’s through a thoughtful word of encouragement or taking the lead on a challenging group assignment, she embodies the values of integrity, compassion, and responsibility. It has been a privilege to witness her growth, and I am confident she will continue to excel in any community she becomes a part of.",
      linkedin: "",  // Add Kenny's LinkedIn link if available
      img:"/2025_kettlen.jpg"
    },
    {
      id:3,
      first_name:"Ramon ",
      last_name:"Parachio",
      portfolio: "https://sites.google.com/view/port-mariananolasco/home",  // Add Kenny's portfolio link if available
      intro: " As Mariana's teacher, I've been consistently impressed by her outstanding management skills and her ability to juggle multiple responsibilities with ease. Whether leading her peers in extracurricular activities or staying on top of her assignments, she consistently demonstrates a strong work ethic and a deep commitment to excellence. Her eagerness to learn and her attention to detail set her apart, making her a reliable and inspiring student who always goes above and beyond expectations.",
      linkedin: "" 
    }
    // Add more students here
  ];
  

  navItems